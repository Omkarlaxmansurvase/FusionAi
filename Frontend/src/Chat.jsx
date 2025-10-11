import "./Chat.css";
import React, { useContext } from "react";
import { MyContext } from "./MyContext";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";

function Chat(){
    const {newChat,prevChats}=useContext(MyContext);
    return(
        <>
        {newChat && <h1>Start a New Chat!</h1>}
        <div className="chat">
            {
                prevChats.map((chat,index)=>
                <div className={chat.roll==="user"?"userDiv":"gptDiv"} key={idx}>
                    {
                        chat.role==="user"?
                        <p className="userMesaage">{chat.content}</p> :
                        <p className="gptMesaage">{chat.content}</p>
                    }

                </div>
                )
            }
            
            
            
            
        </div>
        </>
    )
}

export default Chat;