const router = require('express').Router();
const apiRoutes = require('./api');
const product = require('../controller/product')

router.use('/api', apiRoutes);
router.use('/', product );

module.exports = router;