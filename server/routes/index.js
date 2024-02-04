const router = require('express').Router();

const authRoutes = require('./authRoute');
const videoRoutes = require('./videoRoute');
const userRoutes = require('./userRoute');

router.use('/auth', authRoutes);
router.use('/video', videoRoutes);
router.use('/user', userRoutes);

module.exports = router;