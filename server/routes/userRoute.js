const router = require('express').Router();
const userController = require('../controllers/userController');
const protectedRoute = require('../middlewares/protectedRoute');

router.post('/subscribe', protectedRoute, userController.userSubscribeHandler);
router.get('/subscribedVideos', protectedRoute, userController.getSubscribedCreatorsVideos);

module.exports = router;