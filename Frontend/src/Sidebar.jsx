import "./Sidebar.css"
import { useContext } from "react";
import { MyContext } from "./MyContext";
function Sidebar(){
    const {allThreads,setCurrThreadId,setAllThreads}=useContext(MyContext);

    const getallThreads = async()=>{
        try{
            const response = await fetch('http://localhost:8000/api/thread');
            const res = await response.json();
            console.log(res);
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <section className="sidebar">
            <button>
                <img src="src/assets/blacklogo.png"alt="logo" className="logo"></img>
                <i className="fa-solid fa-pencil"></i>
            </button>

            <ul className="history">
                <li>History1</li>
                <li>History2</li>
                <li>History3</li>
            </ul>

            <div className="sign">
                <p>By Omkar</p>
            </div>
        </section>
    )
}
export default Sidebar;