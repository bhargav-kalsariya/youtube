const mongoose = require('mongoose');

require('dotenv').config();

const makeConnection = async () => {

    const mongoURI = process.env.MONGO_URI;

    try {

        const connect = await mongoose.connect(mongoURI);
        console.log(`connection established ${connect.connection.host}`);

    } catch (error) {

        process.exit(1);

    }

};

module.exports = makeConnection;