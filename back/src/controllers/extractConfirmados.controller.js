const PdfDocument = require('../services/PdfDocument')
const Confirm = require('../models/confirm.model')

exports.getExtract = async(req, res) => {
    try {
        const confirms = await Confirm.find({})
        console.log(confirms)

        await PdfDocument.CreatePdf(confirms)

        res.status(200).json({message: 'sucesso', confirms})
    } 
    catch (err) {
        console.log('erro ao criar extract PDF');
        res.status(400).json({ message: 'erro', err})
    }
}
