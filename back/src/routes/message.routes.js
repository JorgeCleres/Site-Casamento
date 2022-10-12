const express = require('express')
const router = express.Router()
const messageController = require('../controllers/message.controller')

router.post('/message', messageController.registerMessage)

router.get('/message', messageController.getMessages)

module.exports = router