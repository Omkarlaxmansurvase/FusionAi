import "./Sidebar.css"
import { use, useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
// import { get, set } from "mongoose";
import {v1 as uuidv1} from "uuid";

function Sidebar(){
    const {allThreads,CurrThreadId,setAllThreads,setNewChat,setPrompt,setReply,setCurrThreadId,setPrevChats}=useContext(MyContext);

    const getallThreads = async()=>{
        try{
            const response = await fetch('http://localhost:8000/api/thread');
            const res = await response.json();
            const filteredData= res.map(thread=>({threadId:thread.threadId,title:thread.title}));
            console.log("Filtered Data:",filteredData);
            console.log(filteredData);
            setAllThreads(filteredData);

        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getallThreads();

    },[CurrThreadId])

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

    return(
        <section className="sidebar">
            <button onClick={createNewChat}>
                <img src="src/assets/blacklogo.png"alt="logo" className="logo"></img>
                <i className="fa-solid fa-pencil"></i>
            </button>

            <ul className="history">
                {
                    allThreads?.map((thread,idx)=>(
                        <li key={idx}>{thread.title}</li>
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