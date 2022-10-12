const mongoose = require('mongoose')

const newSchema = mongoose.Schema

const messageSchema = newSchema({
    name: {type: String, maxLenght: 50},
    email: {type: String, maxLenght: 50},
    message: {type: String, maxLenght: 380}
}, {
    timestamps: true,
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message