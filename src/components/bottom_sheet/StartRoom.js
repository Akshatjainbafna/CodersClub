import React, {useState} from "react";
import style from "../../styles/bottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";

export default function StartRoom(props){
    const[room,setRoom] = useState("open");
    function send(e, form){
        fetch(form.action, {method:"post", body: new FormData(form)});
        console.log('Room Registered!');
        e.preventDefault();
    }
    return (
    <>
    <div className={style.switch_line}></div>
    <div className="text-right">
       <button className={style.addTopicBtn}> + Add a Topic</button>
    </div>
    <div className={style.selectRoom}>
        <button 
        className={room == "open" ? style.active : ""} 
        onClick={() => setRoom("open")}
        > 
        <div>
            <FcGlobe />
        </div>
        Open
        </button>
        <button className={room == "social" ? style.active : ""}
        onClick={() => setRoom("social")}
        >
        <div>
            <FcGlobe />
        </div>
        Social
        </button>
        <button className={room == "closed" ? style.active : ""}
        onClick={() => setRoom("closed")}
        >
        <div>
            <FcGlobe />
        </div>
        Closed
        </button>
    </div>
    <p>Start a Room <span>{room == "closed" 
    ? "for people i choose" 
    : room =="social" 
    ? "with people I follow" 
    : "open to everyone"}
    </span></p>
    <div className="align-items-center">
    <form method="POST" action="http://localhost:5000/rooms" onSubmit="send(event, this)">
            <input type="text" name="name" id="name" placeholder="What are you Discussing Tonight?" />
        </form>
        </div>
    <div className="text-center">
        <button className={style.letGoBtn}
        onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
        }}>Let's Go</button>
    </div>
    </>
    );
}