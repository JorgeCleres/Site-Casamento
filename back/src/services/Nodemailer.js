const Nodemailer = require('nodemailer');

exports.SendEmail = async(nome, email, mensagem) =>  {
    try {
        let remetente = Nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465, // or 587
            //service: 'smtp.titan.email',
            secure: true,
            auth: {
                user: '',
                pass: ''
            },
            tls: { rejectUnauthorized: false }
        })

        let message = {
            from: '',
            //to: '',
            to: '',
            subject: nome,
            text: `Email: ${email}, Mensagem: ${mensagem}`,
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch {
        console.log('erro ao enviar email')
    }
}

exports.EmailRespoConfirmation = async(email) => {
    try {
        let remetente = Nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465, // or 587
            //service: 'smtp.titan.email',
            secure: true,
            auth: {
                user: '',
                pass: ''
            },
            tls: { rejectUnauthorized: false }
        })

        let message = {
            from: '',
            //to: email,
            to: '',
            subject: 'Confirmação de presença casamento Jorge e Giovana',
            text: "Que bom que você vai marcar presença no nosso dia especial, nos vemos lá!",
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch {
        console.log('erro ao enviar email')
    }
}

exports.SendEmailPresesent = async(nome, email, presente) =>  {
    try {
        let remetente = Nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465, // or 587
            //service: 'smtp.titan.email',
            secure: true,
            auth: {
                user: '',
                pass: ''
            },
            tls: { rejectUnauthorized: false }
        })

        let message = {
            from: '',
            //to: 'giovanaveiga08@gmail.com',
            to: '',
            subject: nome,
            html: `<h4>Recebemos um(uma) ${presente} do(a) ${nome} seu email é ${email}.</h4>`
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch(error) {
        console.log('erro ao enviar email', error)
    }
}

exports.SendPdf = async() => {
    try {
        let remetente = Nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465, // or 587
            //service: 'smtp.titan.email',
            secure: true,
            auth: {
                user: '',
                pass: ''
            },
            tls: { rejectUnauthorized: false }
        })

        let message = {
            from: '',
            to: '',
            //to: '',
            subject: 'Lista de confirmados',
            attachments: [
                {
                    filename: 'confirmados.pdf', // <= Here: made sure file name match
                    path: './confirmados.pdf', // <= Here
                    contentType: 'application/pdf'
                }
            ]
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch(error) {
        console.log('erro ao enviar email', error)
    }
}


