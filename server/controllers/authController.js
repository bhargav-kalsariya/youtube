const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/User");
const { Success, Error } = require("../utility/responseWrapper");

require('dotenv').config();

const signupHandler = async (req, res) => {

    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.send(Error(403, "Email , password and username all are required"));
    }

    try {

        const verifyMail = await User.findOne({ email });

        if (!verifyMail) {

            const securedPassword = await bcrypt.hash(password.toString(), 10);

            const newUser = new User({ email, password: securedPassword });

            await newUser.save();
            return res.send(Success(200, 'User created successfully'));

        }

        return res.send(Error(403, 'User already exists'));

    } catch (error) {

        return res.send(Error(500, error));

    };

};

const loginHandler = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.send(Error(403, 'Email and password both required '));
    }

    try {

        const verifiedUser = await User.findOne({ email }).select('password');

        if (!verifiedUser) {
            return res.send(Error(404, 'User not found'));
        }

        const authorizedUser = await bcrypt.compare(password.toString(), verifiedUser.password);

        if (!authorizedUser) {
            return res.send(Error(403, 'Invalid password'));
        }

        const accessToken = generateAccessToken({ _id: verifiedUser._id });
        const refreshToken = generateRefreshToken({ _id: verifiedUser._id });

        res.cookie('jwt', refreshToken, {
            secure: true,
            httpOnly: true
        });

        return res.send(Success(200, { accessToken }));

    } catch (error) {

        return res.send(Error(500, error.message));

    }
};

const refreshTokenHandler = (req, res) => {

    const cookies = req.cookies;

    if (!cookies.jwt) {
        return res.send(Error(404, 'refreshToken required'));
    }

    const refreshToken = cookies.jwt;

    try {

        const verifiedRefreshToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRETKEY);
        const _id = verifiedRefreshToken._id;
        const accessToken = generateAccessToken({ _id });

        return res.send(Success(201, { accessToken }));

    } catch (error) {

        console.log(error);
        return res.send(Error(401, 'Invalid refresh token'));

    }

};

// functions 

const generateAccessToken = (data) => {

    try {

        const accessToken = jwt.sign(
            data,
            process.env.ACCESS_TOKEN_SECRETKEY,
            { expiresIn: '1d' }
        );

        return accessToken;

    } catch (error) {

        return res.send(Error(500, error));

    }

};

const generateRefreshToken = (data) => {

    try {

        const refreshToken = jwt.sign(

            data,
            process.env.REFRESH_TOKEN_SECRETKEY,
            { expiresIn: '1y' }

        );

        return refreshToken;

    } catch (error) {

        return res.send(Error(500, error));

    }

};

module.exports = {
    loginHandler,
    signupHandler,
    refreshTokenHandler
}