const loginRouter = require('express').Router();
const Login = require('../models/login');

loginRouter.get('/', (req, res) => {
    Login.find().then(loginInfo => {
        res.json(loginInfo);
    })
})

loginRouter.post("/", (req, res, next) => {
    const body = req.body
    console.log(body)
    const login = new Login({
        email: body.email,
        password: body.password
    })
    login.save().then(savedInfo => {
        res.json(savedInfo)
    })
})

module.exports = loginRouter;




// app.post('/login', (req,res) => {
// 	// logic for login post goes here
// 	//should take to login dashboard/homepage.
// })
// /* 

// // this to create a new order
// app.post('/orders', (req, res) => {
// 	login_data = {}
// 	res.type = {'application/json'}
// 	res.body = {}
// 	let collection = await db.collection("orders");
// 	let newDocument = req.body;
// 	newDocument.date = new Date();
// 	let result = await collection.insertOne(newDocument);
// 	res.send(result).status(204);
// 	// create dictionary for user info
// 	send data using Json to database to authenticate

// });
// */
// app.get('/orders', (req, res) => {
// 	//returns all available orders
// })
// /*
// logic for Sign-up
// */
