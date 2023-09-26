const router = require('express').Router();
const product = require('./product.js');
const login = require('./loginRoute');
const logout  = require('./logout');

router.use('/logout', logout );
router.use('/login', login );
router.use('/homepage', product );

module.exports = router;