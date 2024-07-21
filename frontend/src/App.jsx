/* =================================== Import Files ===================================*/
import './App.css'


/* =================================== Import Library =================================*/
import { useState } from 'react'


/* ======================================== App =======================================*/
function App() {
  const [jobTitle, setJobTitle] = useState('')
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState(null)
  const [chat, setChat] = useState([])


  function userInputTitle(e){
    e.preventDefault()
    setJobTitle(e.target.value)
  }

  function userInputContent(e){
    e.preventDefault()
    setUserInput(e.target.value)
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
    }
    catch(error){
      console.log(error)
    }
  }

  console.log(jobTitle)
  return (
    <div className="container">
      <div className="topic">
        <h1>AI Mock Interviewer</h1>
      </div>

      <div className="title">
        <h3>Job Title: <input type="text" name="jobTitle" value={jobTitle} onChange={userInputTitle}/></h3>
      </div>

      <div className="displayContent">
        {/* User and AI Content Display Here*/}
      </div>

      <div className="userInput">
        <input type='text' name='userInput' onChange={userInputContent} />
        <button onClick={sendMessageToAI}>Submit</button>
      </div>

    </div>
  )
}

export default App
