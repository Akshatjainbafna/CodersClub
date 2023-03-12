import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/header.module.css"

export default function Headers(){
    return(
        <div className={style.Header}>
        <Link exact to="/explore">
        <img src="/images/search.png" alt=""/> 
        </Link>
        <div className={style.nav_items}>
            <Link exact to="/friends_invite">
            <img src="/images/invite.png" alt=""/>  
            </Link>
            <Link exact to="/upcoming">
            <img src="/images/calendar.png" alt=""/>  
            </Link>
            <Link exact to="/activity">
            <img src="/images/noti.png" alt=""/>  
            </Link>
            <Link exact to="/profile">
            <img className={style.DP} src="/images/akshat.jpeg" alt=""/>
            </Link>
        </div>
        </div>
    );
}