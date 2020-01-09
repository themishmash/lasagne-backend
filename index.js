//entry point file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv').config() //package that allows us to have file called .env. where you can specify api keys, atlas url. in rails you have .secrets file, here you have it. 

//with deployment heroku won't always use port 5000. It will assign whatever port it has available. 
//when environment variable called port exists (which it will for heroku) use the first variable, otherwise use 5000 for development. For heroku you have production environment and then you have the other one for development
const PORT = process.env.PORT || 5000

const app = express();

// const DB_URL = "mongodb://localhost:27017/lasagne-app-db";
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true}

//mongoose
mongoose.connect(process.env.DB_URL, dbConfig, (err) => {
  if (err) {
    console.log('Error X')
  } else {
    console.log('connected to db')
  }
})


//todo: connect with index.js file my directory. use middleware
//connect entry point index file with routes index.js
app.use(require('./routes/index'))


app.listen(PORT, () => console.log(`listening on port ${PORT}`))