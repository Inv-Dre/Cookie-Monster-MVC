const router = require('express').Router();
const user = require('./userRoute.js');


router.use('/user', user  );


module.exports = router;