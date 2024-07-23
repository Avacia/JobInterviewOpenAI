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
  const instructionToAI = `You are a job interviewer for ${jobTitle}.
                            start with the question “Tell me about yourself”`;
  // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
  const questionMoreThanSix = `give feedback and end the interview`;                           

  function resetChat(){
    setJobTitle('');
    setUserInput('');
    setMessage(null);
    setChat([]);
    window.location.reload();
  } 

  function userInputTitle(e){
    e.preventDefault()
    setJobTitle(e.target.value)
  }

  function userInputContent(e){
    // e.preventDefault()
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
      setMessage(data.message)
      //console.log(data)
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
      //console.log(data)
      setMessage(data.message)
      setUserInput('');
    
    }
    catch(error){
      console.log(error)
    }
  }

  async function sendQuestionMoreThanSix(){

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: questionMoreThanSix,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    try{
      const response =  await fetch('http://localhost:4000/completions', options)
      const data =  await response.json()
      //console.log(data)
      setMessage(data.message)
    
    }
    catch(error){
      console.log(error)
    }

  }

  // Use useEffect to send the job title to AI when it changes
  useEffect(() => {

    if(chat.length > 4 && chat.length < 6){
      sendQuestionMoreThanSix()
      // resetChat();
    }  

    if (message && userInput) {
      
      // setChat([...chat, message])
      //console.log(message)
      setChat( chat => ([ ...chat,
        {
          role: "user",
          content: userInput
        },
        {
          role:message.role,
          content:message.content
        }
      ]))
    }

    if(message && !userInput){
      setChat( chat => ([ ...chat,
        {
          role:message.role,
          content:message.content
        }
      ]))
      // console.log(jobTitle)
    }

  }, [message]);

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

        <ul>
          {chat.length > 0 && chat.map((message, index) => {
            //console.log(message)
            return(
              <li key={index}>
                <p>{message.role}</p>
                <p>{message.content}</p>
              </li>
            )
          })}
        </ul>

        {chat.length > 5 && <button onClick={resetChat}>Reset</button>}
        
      </div>
      <div className="userInput">
        <input type='text' name='userInput' value={userInput} placeholder="Type your response here..." onChange={userInputContent} />
        <button onClick={sendMessageToAI}>Submit</button>
      </div>
    </div>
  )
}

export default App
