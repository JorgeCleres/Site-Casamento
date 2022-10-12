const Present = require('../models/present.model')
const Nodemailer = require('../services/nodemailer')

exports.registerPresent = async(req, res) => {
    try {
        let item = {
            nome: req.body.nome,
            email: req.body.email,
            presente: req.body.presente,
        }

        console.log(item);
        let savePresent = await new Present(item)
        savePresent.save()

        //await Nodemailer.SendEmailPresesent(req.body.nome, req.body.email, req.body.presente)

        res.status(201).json({ message: 'present criado com sucessos', savePresent})
    }
    catch (erro) {
        res.status(400).json({ message: 'erro', erro: erro})
        console.log(erro);
    }
}