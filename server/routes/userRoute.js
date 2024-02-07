const router = require('express').Router();
const userController = require('../controllers/userController');
const protectedRoute = require('../middlewares/protectedRoute');

router.get('/subscribedVideos', protectedRoute, userController.getSubscribedCreatorsVideos);
router.get('/profile', protectedRoute, userController.getMyProfileHandler);
router.post('/subscribe', protectedRoute, userController.userSubscribeHandler);
router.post('/profileOthers', protectedRoute, userController.getOtherUserProfileHandler);

module.exports = router;