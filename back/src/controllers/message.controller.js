const Message = require('../models/message.model')
const Nodemailer = require('../services/nodemailer')

exports.registerMessage = async(req, res) => {
    try {
        let item = {
            name: req.body.nome,
            email: req.body.email,
            message: req.body.mensagem
        }
        console.log(item)
        let saveMessage = await new Message(item)
        saveMessage.save()

        //await Nodemailer.SendEmail(item.nome, item.email, item.message)

        res.status(201).json({ message: 'Confirm criado com sucesso', saveMessage})
    }
    catch (err) {
        res.status(400).json({message: 'erro', err: err})
        console.log(err)
    }
}

exports.getMessages = async(req, res) => {
    try {
        const messageRes = await Message.find({})
        res.status(200).json({ message: 'Messages', messageRes})
    }
    catch (err){
        res.status(400).json({message: 'erro', err})
    }
}