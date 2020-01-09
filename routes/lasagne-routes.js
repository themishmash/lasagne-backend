const express = require ('express')
const router = express.Router();
const { index, create } = require('../controllers/lasagne-controller') //accessing exports from lasagne controller

//here create routes
router.get('/', index)
//same as :
// router.get('/', (req, res) => {
//   res.send('api working')
// })

router.get('/create', create)


module.exports = router