const User = require("../models/User");

const signupHandler = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(403).send({ message: 'Please enter your email and password' });
        return;
    }

    const verifyMail = await User.findOne({ email });

    if (!verifyMail) {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(200).send(newUser);
        return;
    }

    res.status(403).send({ message: 'User already exists' });

}

const loginHandler = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(403).send({ message: 'Email and password both required' });
        return;
    }

    try {
        const verifiedUser = await User.findOne({ email });

        if (!verifiedUser) {
            res.status(403).send({ message: 'User not found' });
            return;
        }

        const authorizedUser = verifiedUser.password === password;

        if (!authorizedUser) {
            res.status(403).send({ message: 'Invalid password' });
            return;
        }

        res.status(200).send({ message: 'User authorized and you are logged in now' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

module.exports = {
    loginHandler,
    signupHandler,
}