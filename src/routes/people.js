const express = require('express')
const peopleController = require('../controllers/people')
const router = express.Router()
const model = require('../models/index')

router.get('/', peopleController.index.bind(null, model.models))
router.post('/create', peopleController.createProcess.bind(null, model.models))
router.get('/create', peopleController.createForm)

module.exports = router