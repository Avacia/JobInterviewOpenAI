const express = require('express')
const router = express.Router()
const userInputController = require('../controllers/userInputController')


//Define routes for retrieving and posting user input
router.get('/userInput', userInputController.getUserInput)
router.post('/userInput', userInputController.postUserInput)

module.exports = router