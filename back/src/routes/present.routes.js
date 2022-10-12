const express = require('express')
const router = express.Router()

const presenteController = require('../controllers/present.controller')

router.post('/present', presenteController.registerPresent)

module.exports = router