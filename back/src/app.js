const express = require('express')
const cors = require('cors')

const mongooConnection = require('./config/mongooConnection.config')

const app = express()

const index = require('./routes/index')
const confirm = require('./routes/confirm.routes')
const message = require('./routes/message.routes')
const present = require('./routes/present.routes')
const extract = require('./routes/extract.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json'}))
app.use(cors()) 

//.set =  usao para incluir algum arquivo estático, nesse caso está incluindo a conecão com o banco
app.set('mongoose connection', mongooConnection)

app.use('/', index)
app.use('/api', confirm)
app.use('/api', message)
app.use('/api', present)
app.use('/api', extract)

module.exports = app