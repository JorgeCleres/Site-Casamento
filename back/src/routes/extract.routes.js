const express = require('express')
const router = express.Router()
const extractConfirm = require('../controllers/extractConfirmados.controller')

router.get('/extract', extractConfirm.getExtract)

module.exports = router