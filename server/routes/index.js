
const router = require('express').Router();
const authRoutes = require('./authRoute');

router.use('/auth', authRoutes);

module.exports = router;