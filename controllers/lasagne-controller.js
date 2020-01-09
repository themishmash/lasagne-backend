//query database

const Lasagne = require('../models/Lasagne');

//test endpoint
const index = async (req, res) => {
  const lasagnes = await Lasagne.find() //.find is async function and needs to wait the resolve
  res.send(lasagnes)
}

//endpoint
const create = async (req, res) => {
  const { name, location, price} = req.body //three variables name location and price that contain strings 
  const newLasagne = new Lasagne({
    name,
    location,
    price
  })
  const savedLasagne = await newLasagne.save();
  res.send(savedLasagne);
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