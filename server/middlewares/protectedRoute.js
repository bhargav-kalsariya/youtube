const jwt = require('jsonwebtoken');

require('dotenv').config();

const { Error } = require("../utility/responseWrapper")

module.exports = async (req, res, next) => {

    if (!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.send(Error(401, 'Access denied without authorization'));
    }

    const accessToken = req.headers.authorization.split(' ')[1];

    if (!accessToken) {
        return res.send(Error(401, 'Access denied without access token'));
    }

    try {

        const verifiedAccessToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRETKEY);

        req._id = verifiedAccessToken._id;
        next();

    } catch (error) {

        console.log(error);
        return res.send(Error(401, 'Invalid access token'));

    }

}