const bcrypt = require('bcrypt');

const User = require("../models/User");
const { Success, Error } = require("../utility/responseWrapper");

const signupHandler = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.send(Error(403, "Email and password both are required"));
    }

    const verifyMail = await User.findOne({ email });

    if (!verifyMail) {

        const securedPassword = await bcrypt.hash(password.toString(), 10);

        const newUser = new User({ email, password: securedPassword });

        await newUser.save();
        return res.send(Success(200, newUser));

    }

    res.send(Error(403, 'User already exists'));

}

const loginHandler = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.send(Error(403, 'Email and password both required '));
    }

    try {

        const verifiedUser = await User.findOne({ email });

        if (!verifiedUser) {
            return res.send(Error(404, 'User not found'));
        }

        const authorizedUser = await bcrypt.compare(password.toString(), verifiedUser.password);

        if (!authorizedUser) {
            return res.send(Error(403, 'Invalid password'));
        }

        res.send(Success(200, 'User authorized and you are logged in now'));

    } catch (error) {

        res.send(Error(500, error.message));

    }
};

module.exports = {
    loginHandler,
    signupHandler,
}