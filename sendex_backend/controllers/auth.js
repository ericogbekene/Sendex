const express = require('express');
const router = express.Router();
const loginRouter = require('express').Router();
const signupRouter = require('express').Router();
const { Login, Signup } = require('../models/auth');

// Define authentication routes
// login
loginRouter.post("/", async (req, res, next) => {
    const { email, password } = req.body //get the inputted login info (email & password)

    if (email === undefined || password === undefined) {
        return res.status(400).json({
            error: "content missing"
        })
    }

    /* Logic for confirming if user information in database*/
    // find user by email
    try {
        const user = await Signup.findOne({ email })
        if (!user)
            return res.status(400).json({msg: "Invalid email or password"})

        // Check if password matches
        if (user.password !== password)
            return res.status(400).json({msg: "Invalid email or password"})

        res.status(200).json({msg: "Login successful"})
    } catch (err) {
        console.error(err.message);
        res.status(500).json({msg: "Server error"})
    }
})

// signup
signupRouter.get('/', (req, res) => {
    Signup.find().then(SignupInfo => {
        res.json(SignupInfo);
        SignupInfo.map(user => {
            console.log({
                name: user.email,
                pwd: user.password
            })
        })
    })
})

signupRouter.post("/", (req, res, next) => {
    const {name, email, password, password2} = req.body
    
    if (name === undefined || email === undefined || password === undefined || password2 === undefined) {
        return res.status(400).json({
            error: "content missing"
        })
    }

    if (password !== password2) {
        return res.status(400).json({
            error: "Passwords do not match"
        })
    }

    const signup = new Signup({
        name, email, password
    })
    signup.save().then(savedUser => {
        res.json(savedUser)
    })
})






module.exports = { loginRouter, signupRouter };