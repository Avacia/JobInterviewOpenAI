/* =================================== Import Files ===================================*/
import './App.css'


/* =================================== Import Library =================================*/
import { useState } from 'react'


/* ======================================== App =======================================*/
function App() {
  const [jobTitle, setJobTitle] = useState(null)
  const [userInput, setUserInput] = useState(null)
  const [chat, setChat] = useState([])


  function userInputTitle(e){
    setJobTitle(e.target.value)
  }

  function userInputContent(e){
    setUserInput(e.target.value)
  }

  function submitUserInput(){
    setChat([...chat, {user: userInput}])
  }

  return (
    <div className="container">
      <div className="topic">
        <h1>AI Mock Interviewer</h1>
      </div>

      <div className="title">
        <h3>Job Title: <input type="text" name="jobTitle" /></h3>
      </div>

      <div className="displayContent">
        {/* User and AI Content Display Here*/}
      </div>

      <div className="userInput">
        <input type='text' name='userInput' onChange={userInputContent} />
        <button onClick={submitUserInput}>Submit</button>
      </div>

    </div>
  )
}

export default App
