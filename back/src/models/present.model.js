const mongoose = require('mongoose')

const newSchema = mongoose.Schema

const presentSchema = newSchema({
    nome: {type: String, maxLenght: 50, required: true},
    email: {type: String, maxLenght: 50, required: true},
    presente: {type: String, maxLenght: 100, required: true}
}, {
    timestamps: true,
})

const Present = mongoose.model('Present', presentSchema)

module.exports = Present
