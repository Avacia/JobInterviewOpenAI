/* =================================== Import Files ===================================*/
import './App.css'


/* =================================== Import Library =================================*/
import { useState, useEffect } from 'react'


/* ======================================== App =======================================*/
function App() {
  const [jobTitle, setJobTitle] = useState('')
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState(null)
  const [chat, setChat] = useState([])
  const instructionToAI = `You are a job interviewer who is going to interview a candidate for ${jobTitle}.
                           You should ask a series of questions to the user, and can adjust its response based on the answers.
                           The flow will start with the Interviewer saying “Tell me about yourself”. 
                           Ask at least 6 questions based on response of the user. At the end of the whole interview, 
                           the Interviewer should comment on how well the user answered the questions, and suggest 
                           how the user can improve its response.`


  function userInputTitle(e){
    e.preventDefault()
    setJobTitle(e.target.value)
  }

  function userInputContent(e){
    e.preventDefault()
    setUserInput(e.target.value)
  }

  async function sendTitleToAI(){
    const options = {
      method: "POST", 
      body: JSON.stringify({
        message: instructionToAI,
      }),
      headers:{
        "Content-Type": "application/json",
      }
    }

    try{
      const response = await fetch("http://localhost:4000/completions", options)
      const data = await response.json()
      console.log(data)
      setChat([...chat, { role: 'Interviewer', content: data.choices[0].message }])
    }
    catch(error){
      console.log(error)
    }
  }

  async function sendMessageToAI(){
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: userInput,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    try{
      const response = await fetch('http://localhost:4000/completions', options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choices[0].message)
      setChat([...chat, { role: 'user', content: userInput }, { role: 'Interviewer', content: data.choices[0].message }])
    }
    catch(error){
      console.log(error)
    }
  }

  // Use useEffect to send the job title to AI when it changes
  useEffect((message) => {
    if (message) {
      sendTitleToAI();
    }
  }, [message]);

  console.log(jobTitle)
  return (
    <div className="container">
      <div className="topic">
        <h1>AI Mock Interviewer</h1>
      </div>

      <div className="title">
        <h3>Job Title: <input type="text" name="jobTitle" value={jobTitle} placeholder="Enter Job Title" onChange={userInputTitle}/></h3>
        <button onClick={sendTitleToAI}>Submit</button>
      </div>
      <div className="displayContent">
        {/* User and AI Content Display Here*/}
        {chat.map((message, index) => (
          <div key={index} className={message.role}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div className="userInput">
        <input type='text' name='userInput' value={userInput} placeholder="Type your response here..." onChange={userInputContent} />
        <button onClick={sendMessageToAI}>Submit</button>
      </div>
    </div>
  )
}

export default App
