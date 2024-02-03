const router = require('express').Router();

const videoController = require('../controllers/videoController');
const protectedRoute = require('../middlewares/protectedRoute');

router.get('/', protectedRoute, videoController.getAllVideoHandler);
router.post('/create', protectedRoute, videoController.createVideoHandler);

module.exports = router;