const express = require ('express')
const router = express.Router();

//define some routes. These routes will be like routes.rb files in rails. 
router.use('/lasagne', require ('./lasagne-routes'))


module.exports = router