const express = require('express');
const makeConnection = require('./DBconnect');
const app = express();
const mainRoute = require('./routes');

require('dotenv').config();

app.use(express.json());
app.use('/api', mainRoute);

const PORT = process.env.PORT || 3000;
makeConnection();

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});