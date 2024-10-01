const express = require('express');
const router = express.Router();
const OpenAIApi  = require('openai'); const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
 });
 
const openAIController = require('../controllers/openAIController');

//Define route for retrieving data from OpenAI API
router.post('/completions', openAIController.interviewConversation)

module.exports = router