/* =================================== Import Files ===================================*/
import './App.css'
import onlineDot from '/onlineDot.png'


/* =================================== Import Library =================================*/
import { useState, useEffect } from 'react'


/* ======================================== App =======================================*/
function App() {
  const [jobTitle, setJobTitle] = useState('')
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState(null)
  const [chat, setChat] = useState([])
  const [questionCount,  setQuestionCount] = useState(0)
  const instructionToAI = `You are a job interviewer for ${jobTitle}.
                           Start with the question “Tell me about yourself”.`;
  const questionToContinue = `response back to user and ask another question related 
                              to the response as a job interviewer for ${jobTitle}.`                      
  const questionMoreThanSix = `Comment on how well the user answered the questions, 
                               and suggest how the user can improve its response. 
                               Finished the conversation.`;                           


  function resetChat(){
    setJobTitle('')
    setUserInput('')
    setMessage(null)
    setChat([])
    setQuestionCount(0)
  } 

  function userInputTitle(e){
    e.preventDefault()
    setJobTitle(e.target.value)
  }

  function userInputContent(e){
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
      setQuestionCount(questionCount + 1)
    }
    catch(error){
      console.log(error)
    }
  }

  async function sendMessageToAI(){
    
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: questionToContinue, userInput, chat
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
      setQuestionCount(questionCount + 1)
    }
    catch(error){
      console.log(error)
    }
  }

  async function sendQuestionMoreThanSix(){

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: questionMoreThanSix, chat
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
      setQuestionCount(questionCount + 1)
    }
    catch(error){
      console.log(error)
    }

  }

  // Use useEffect to send the job title to AI when it changes
  useEffect(() => {

    if(questionCount >= 6 && questionCount < 7){
      sendQuestionMoreThanSix()
    }  

    if (message && userInput) {
      setChat( chat => ([ ...chat,
        {
          role: "User",
          content: userInput
        },
        {
          role:message.role,
          content:message.content
        }
      ]))
      setUserInput('')
    }

    if(message && !userInput){
      setChat( chat => ([ ...chat,
        {
          role:message.role,
          content:message.content
        }
      ]))
    }

  }, [message]);

  console.log(chat)

  return (
    <div className="container">
      <div className="topic">
        <h1>AI Mock Interviewer</h1>
      </div>

      <div className="title">
        <h3>Job Title: <input className="titleInputField" type="text" name="jobTitle" value={jobTitle} placeholder="Enter Job Title" onChange={userInputTitle}/></h3>
        <button className="titleBtn" onClick={sendTitleToAI}>Submit</button>
      </div>

      <div className="displayContent">
        {/* User and AI Content Display Here*/}
        <div className="user">
          <div className='userIcon'>
            {jobTitle && <img src={onlineDot} alt="onlineDot" />}
            <h3 className="roleTitle">Assistant</h3>
          </div>

          <div>
            {chat.length > 2 && <button className="resetBtn" onClick={resetChat}>Reset</button>}
          </div>
        </div>

        <hr />
        
        <ul className="chat">
          {chat.length > 0 && chat.map((message, index) => {
            console.log(message)
            return(
              <li className={message.role === "assistant" ? "chatListAssistant" : "chatListUser"} key={index}>
                <p className="messageContent">{message.content}</p>
              </li>
            )
          })}
        </ul>        
      </div>

      {questionCount < 7 && <div className="userInput">
        <input className="responseInputField" type='text' name='userInput' value={userInput} placeholder="Type your response here..." onChange={userInputContent} />
        <button className="responseBtn" onClick={sendMessageToAI}>Submit</button>
      </div>}
    </div>
  )
}

export default App
