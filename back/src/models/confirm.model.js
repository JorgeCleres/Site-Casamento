const mongoose = require('mongoose')

const newSchema = mongoose.Schema;

const ConfirmSchema = newSchema({
    nome0: {type: String, maxLenght: 50 },
    nome1: {type: String, maxLenght: 50 },
    nome2: {type: String, maxLenght: 50 },
    nome3: {type: String, maxLenght: 50 },
    nome4: {type: String, maxLenght: 50 },
    nome5: {type: String, maxLenght: 50 },
    nome6: {type: String, maxLenght: 50 },
    nome7: {type: String, maxLenght: 50 },
    nome8: {type: String, maxLenght: 50 },
    nome9: {type: String, maxLenght: 50 },
    age0: {type: String, maxLenght: 10 },
    age1: {type: String, maxLenght: 10 },
    age2: {type: String, maxLenght: 10 },
    age3: {type: String, maxLenght: 10 },
    age4: {type: String, maxLenght: 10 },
    age5: {type: String, maxLenght: 10 },
    email: {type: String, maxLenght: 50, required: true},
    children: {type: Boolean}
}, {
    timestamps: true,
})

const Confirm = mongoose.model('confirmSchema', ConfirmSchema)

module.exports = Confirm