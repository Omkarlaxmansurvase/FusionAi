import "./Sidebar.css"
import { use, useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
// import { get, set } from "mongoose";
function Sidebar(){
    const {allThreads,CurrThreadId,setAllThreads}=useContext(MyContext);

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

    return(
        <section className="sidebar">
            <button>
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