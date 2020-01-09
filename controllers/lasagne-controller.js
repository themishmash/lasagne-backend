//query database

const Lasagne = require('../models/Lasagne');

//test endpoint
const index = (req, res) => {
  res.send('api working')
}

//endpoint
const create = (req, res) => {
  res.send('create action')
}

//need to export them. export as object
module.exports = {
  index: index,
  create: create
}

//same as this:
// module.exports = {
//   index,
//   create
// }