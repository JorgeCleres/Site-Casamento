const Confirm = require('../models/confirm.model')
const Nodemailer = require('../services/nodemailer')

exports.registerConfirm = async(req, res) => {
    try {
        console.log(req.body)
        let item = {
            nome0: req.body.nome0,
            nome1: req.body.nome1,
            nome2: req.body.nome2,
            nome3: req.body.nome3,
            nome4: req.body.nome4,
            nome5: req.body.nome5,
            nome6: req.body.nome6,
            nome7: req.body.nome7,
            nome8: req.body.nome8,
            nome9: req.body.nome9,
            nome10: req.body.nome10,
            age0: req.body.age0,
            age1: req.body.age1,
            age2: req.body.age2,
            age3: req.body.age3,
            age4: req.body.age4,
            age5: req.body.age5,
            email: req.body.email,
            children: req.body.children
        }
        let saveConfirm = await new Confirm(item)
        saveConfirm.save()

        //await Nodemailer.EmailRespoConfirmation(req.body.email)

        res.status(200).json({ message: 'Confirm criado com sucesso', saveConfirm})
    }
    catch(err) {
        res.status(400).json({message: 'erro', err: err})
        console.log(err)
    }
}

exports.getConfirm = async(req, res) => {
    try {
        const confirmRes = await Confirm.find({})
        res.status(200).json({message: 'confirmação', confirmRes})
    }
    catch(err) {
        res.status(400).json({message: 'erro', err})
    }
}