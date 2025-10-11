import "./ChatWindow.css"
import Chat from"./Chat.jsx"
import { MyContext } from "./MyContext.jsx";
import { useContext,useState,useEffect } from "react";
import {PuffLoader} from "react-spinners"
function ChatWindow(){
    const {prompt,setPrompt,reply,setReply,currThreadId,prevChats,setPrevChats}=useContext(MyContext);
    const [loading,setLoading]=useState(false);

    const getReply = async () => {
         setLoading(true);
        // setNewChat(false);

        console.log("message ", prompt, " threadId ", currThreadId);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };

        try {
            const response = await fetch("http://localhost:8000/api/chat", options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }


    // adding chat messages to prevChats
    useEffect(() => {
        if(prompt && reply) {
            setPrevChats(prevChats => (
                [...prevChats, { // this is an array of objects
                    role: "user",
                    content: prompt
                },{
                    role: "assistant",
                    content: reply
                }]
            ));
        }

        setPrompt("");
    }, [reply]);


    const handleProfileClick = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        
        <div className="chatWindow">
            <div className="navbar">
                <span>FusionAi <i className="fa-solid fa-chevron-down"></i></span>
                 <div className="userIconDiv" >
                    <span className="userIcon"><i className="fa-solid fa-user"></i></span>
                </div>
            </div>
            
            <Chat></Chat>
            <PuffLoader color="#fff" loading={loading}>

            </PuffLoader>

            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask Anything" 
                    value={prompt}
                    onChange={(e)=>setPrompt(e.target.value)}
                    onKeyDown={(e)=>e.key==='Enter'? getReply():''}
                    >
                    
                    </input>
                    <div id="submit" onClick={getReply}><i className="fa-solid fa-paper-plane"></i></div>
                </div>
                <p className="info">
                    FusionAi can make mistakes. Check important info. See Cookie Preferences.
                </p>
            </div>
            
        </div>
    )
}
export default ChatWindow;