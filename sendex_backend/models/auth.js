const mongoose = require('mongoose')

// Signup Schema
const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

signupSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports.Signup = mongoose.model('Signup', signupSchema)

// module.exports.Login = mongoose.model('Login', loginSchema)
// module.exports.Signup = mongoose.model('Signup', signupSchema)














