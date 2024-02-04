const router = require('express').Router();

const videoController = require('../controllers/videoController');
const protectedRoute = require('../middlewares/protectedRoute');

router.get('/', protectedRoute, videoController.getAllVideoHandler);
router.post('/create', protectedRoute, videoController.createVideoHandler);
router.post('/like_dislike', protectedRoute, videoController.likeUnlikeVideosHandler);
router.post('/comment', protectedRoute, videoController.commentVideosHandler);

module.exports = router;