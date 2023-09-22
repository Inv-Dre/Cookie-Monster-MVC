const router = require('express').Router();
const signUp = require('./signupRoute');
const login = require('./loginRoute');

router.use('/signup', signUp );
router.use('/login', login );

module.exports = router;