// import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Chat from './Chat.jsx'
import ChatWindow from './ChatWindow.jsx'
import "./App.css"
import{MyContext} from"./MyContext.jsx"
import { useState } from 'react'

import { v1 as uuidv1 } from 'uuid';



function App() {
  
  const [prompt,setPrompt]=useState("");
  const [reply,setReply]=useState("");
  const [currThreadId,setCurrThreadId]=useState(uuidv1);
  const [prevChats, setPrevChats] = useState([]); 
  const [newChat, setNewChat] = useState(true);
  const [allThreads,setAllThreads]=useState([]);
  const ProviderValues={
    prompt,setPrompt,
    reply,setReply,
    currThreadId,setCurrThreadId,
    newChat,setNewChat,
    prevChats,setPrevChats,
    allThreads,setAllThreads
  };


  return (
   
    <div className="app">
      <MyContext.Provider value={ProviderValues}>
      <Sidebar/>
      <ChatWindow/>
      </MyContext.Provider>
    </div>
  )
}

export default App
