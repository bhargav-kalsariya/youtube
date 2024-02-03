const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const makeConnection = require('./DBconnect');
const mainRoute = require('./routes');

require('dotenv').config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.use('/api', mainRoute);

const PORT = process.env.PORT || 3000;
makeConnection();

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});