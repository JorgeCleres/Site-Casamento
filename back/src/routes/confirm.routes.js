const express = require('express')
const router = express.Router()
const confirmController = require('../controllers/confirm.controller')

//const Confirm = require('../models/confirm.model')

router.post('/confirm', confirmController.registerConfirm)

router.get('/confirm', confirmController.getConfirm)

module.exports = router
