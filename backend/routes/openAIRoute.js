const express = require('express')
const router = express.Router()
const openAIController = require('../controllers/openAIController')


//Define route for retrieving data from OpenAI API
router.post('/completions', openAIController.interviewConversation)

module.exports = router