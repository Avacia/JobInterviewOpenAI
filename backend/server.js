/* =================================== Import Library =================================== */
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const openAI = require('openai')


/* ===================================== Middleware ===================================== */
const app = express()
app.use(cors())
app.use(express.json())


/* =================================== Import Routes ==================================== */
const openAIRouter = require('./routes/openAIRoute')
const userInputRouter = require('./routes/userInputRoute')


/* ======================================= Routes ======================================= */
app.use(openAIRouter)
app.use(userInputRouter)


/* ================================= Default Root Routes ================================ */
app.get('/', (req, res) => {
    res.send("Server Connected")
})


/* ======================================== Port ======================================== */
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})