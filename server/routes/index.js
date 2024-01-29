const router = require('express').Router();

const authRoutes = require('./authRoute');
const videoRoutes = require('./videoRoute');

router.use('/auth', authRoutes);
router.use('/video', videoRoutes);

module.exports = router;