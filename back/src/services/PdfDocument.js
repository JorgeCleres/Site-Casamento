const PDFDocument = require('pdfkit');
const fs = require('fs');
const Nodemailer = require('../services/nodemailer')

exports.CreatePdf = async (confirmados) => {

    try {
        const pdf = new PDFDocument();
        confirmados.forEach(item => {
            newConfirmados = (item.nome0, item.nome1, item.age0);
        });
        console.log(confirmados.forEach(item => {
            newConfirmados = (item.nome0, item.nome1, item.age0);
        }))

        pdf.text(confirmados.forEach(item => {
            newConfirmados = (item.nome0, item.nome1, item.age0);
        }));

        pdf.pipe(fs.createWriteStream('confirmados.pdf'))

        pdf.end();

        await Nodemailer.SendPdf()
    } catch {
        console.log('erro ao gerar PDF');
    }
}
