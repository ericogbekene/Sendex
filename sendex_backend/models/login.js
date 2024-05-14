const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
	email: {
        type: String,
        required: true
    },
	password: {
        type: String,
        required: true
    },
})

loginSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Login', loginSchema)