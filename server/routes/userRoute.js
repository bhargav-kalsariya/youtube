const router = require('express').Router();
const userController = require('../controllers/userController');
const protectedRoute = require('../middlewares/protectedRoute');

router.post('/subscribe', protectedRoute, userController.userSubscribeHandler);

module.exports = router;