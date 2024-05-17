//logic to listen for server goes Here 

const axios = require('axios')
const config = require("./utils/config"); //Gives us access to the port number and mongo_uri stored in the .env file
const express = require('express');
const app = express()
const loginRouter = require("./controllers/login");
const ordersRouter = require("./controllers/order");
const reviewsRoute = require("./controllers/review");
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerSetup = require('./swagger');

mongoose.set('strictQuery', false)

console.log("connecting to", config.MONGO_URI)

// Connect to Mongoose
mongoose.connect(config.MONGO_URI)
    .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const baseUrl = "/api/login"
const ordersUrl = "/api/orders"
const reviewUrl = "/api/reviews"

// Middleware
app.use(cors())
// app.use(express.static('dist'))
app.use(express.json())
app.use(express.static("dist"))
app.use(baseUrl, loginRouter)
app.use(ordersUrl, ordersRouter)
app.use(reviewUrl, reviewsRoute);

// setup Swagger for api documentation
swaggerSetup(app);


/* Load environment variables
const loadEnvironment = require("./loadEnvironment.js");
*/


module.exports = app
