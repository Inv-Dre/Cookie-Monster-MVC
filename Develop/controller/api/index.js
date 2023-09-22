const router = require('express').Router();
const product = require('./product.js');
const login = require('./loginRoute');

router.use('/login', login );
router.use('/product', product );

module.exports = router;