// Initialize OpenAI
const OpenAIApi  = require('openai');
const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
});
module.exports.interviewConversation = async(req, res) => {

    const { message } = req.body;
    

    try{
        
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": message}]
        })
        res.json({ message: chatCompletion.choices[0].message});
    }
    catch(error){
        // res.status(500).send("Internal Server Error")
        res.status(500).send(error)
    }
}