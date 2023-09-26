const router = require('express').Router();
const product = require('./product.js');
const login = require('./loginRoute.js');
const logout  = require('./logout.js');

router.use('/logout', logout );
router.use('/login', login );
router.use('/homepage', product );

module.exports = router;