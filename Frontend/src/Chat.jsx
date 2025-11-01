import "./Chat.css";
import React, { useContext,useState,useEffect } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Chat(){

    const {newChat,prevChats,reply}=useContext(MyContext);
    const [LatestReply, setLatestReply] = useState(null);

    useEffect(()=>{
        if(reply==null){
            setLatestReply(null);
            return;
        }
        if(!prevChats.length) return;
        const content = reply.split("")//individual words
        let idx =0;
        const interval = setInterval(()=>{
            setLatestReply(content.slice(0,idx+1).join(""));

            idx++;
            if(idx>=content.length) clearInterval(interval);
        },40
    )
    },[prevChats,reply])
    return (
  <>
    {newChat && <h1>Start a New Chat!</h1>}

    <div className="chat">
      {
        Array.isArray(prevChats) && prevChats.length > 0 ? (
          prevChats.map((chat, idx) => (
            <div className={chat.role === "user" ? "userDiv" : "gptDiv"} key={"non-typing"}>
              {chat.role === "user"
                ? <p className="userMesaage">{chat.content}</p>
                : <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</ReactMarkdown>
              }
            </div>
          ))
        ) : (
          !newChat && <h2>No messages in this thread yet</h2>
        )
      }

      {/* Typing effect only when new reply comes */}
      {LatestReply && (
        <div className="gptDiv" key={"typing"}>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{LatestReply}</ReactMarkdown>
        </div>
      )}
    </div>
  </>
);

}

export default Chat;