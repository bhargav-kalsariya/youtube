const mongoose = require('mongoose');

require('dotenv').config();

const makeConnection = () => {

    const mongoURI = process.env.MONGO_URI;

    mongoose.connect(mongoURI)
        .then(() => {
            console.log('connection established');
        })
        .catch((err) => {
            console.log(err);
        });

};

module.exports = makeConnection;