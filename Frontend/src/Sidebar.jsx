import "./Sidebar.css"
import { use, useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
// import { get, set } from "mongoose";
import {v1 as uuidv1} from "uuid";

function Sidebar(){
    const {allThreads,currThreadId,setAllThreads,setNewChat,setPrompt,setReply,setCurrThreadId,setPrevChats}=useContext(MyContext);

    const getallThreads = async()=>{
        try{
            const response = await fetch('http://localhost:8000/api/thread');
            const res = await response.json();
            const filteredData= res.map(thread=>({threadId:thread.threadId,title:thread.title}));
            // console.log("Filtered Data:",filteredData);
            // console.log(filteredData);
            setAllThreads(filteredData);

        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getallThreads();

    },[currThreadId])

    const createNewChat=async()=>{
        try{
            setNewChat(true);
            setPrompt("");
            setReply(null);
            setCurrThreadId(uuidv1());
            setPrevChats([]);

        }
        catch(e){
            console.log(e);
        }
    }

    const changeThread = async(newThreadId) =>{
        setCurrThreadId(newThreadId);
        try{
            const response =await fetch(`http://localhost:8000/api/thread/${newThreadId}`);
            const res = await response.json();
            console.log("Fetched Thread Data:",res);
            const formattedChats = res.messages?.map(msg => ({
            role: msg.role,
            content: msg.content
            })) || [];

            setPrevChats(formattedChats);

            // setPrevChats(res);
            setNewChat(false);
            setReply(null); 
        }
        catch(err){
            console.log(err);
        }
    }

    const deleteThread = async (threadId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/thread/${threadId}`, {method: "DELETE"});
            const res = await response.json();
            console.log(res);

            //updated threads re-render
            setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));

            if(threadId === currThreadId) {
                createNewChat();
            }

        } catch(err) {
            console.log(err);
        }
    }

    return(
        <section className="sidebar">
            <button onClick={createNewChat}>
                <img src="src/assets/blacklogo.png"alt="logo" className="logo"></img>
                <i className="fa-solid fa-pencil"></i>
            </button>

            <ul className="history">
                {
                    allThreads?.map((thread,idx)=>(
                        <li key={idx}
                        onClick={()=>changeThread(thread.threadId)}
                        className={thread.threadId===currThreadId?"highlighted":""}
                        >{thread.title}
                        <i className="fa-solid fa-trash"
                        onClick={(e)=>{
                            e.stopPropagation(); // this prevents event bubbling that means jabh child element pr click hoga to parent pr click event nhi jayega
                            deleteThread(thread.threadId);
                        }}
                        
                        ></i>
                        </li>
                    ))
                }
            </ul>

            <div className="sign">
                <p>By Omkar</p>
            </div>
        </section>
    )
}
export default Sidebar;