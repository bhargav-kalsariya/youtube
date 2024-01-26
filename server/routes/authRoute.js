const router = require('express').Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.signupHandler);
router.post('/login', authController.loginHandler);

module.exports = router;