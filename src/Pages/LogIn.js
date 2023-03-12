import React from "react";
import style from "../styles/PhoneConfirm.module.css";
import { Link } from "react-router-dom";
export default function LogIn(){
    return(
        <div className={style.phoneConfirmationContainer}>
            <Link exact to="/" className={style.backBtn}>
            <img src="\images\arrow.png" alt="" />
        </Link>
        <h1>Quickly, LogIn</h1>
        <form method="POST" action="http://localhost:5000/users/login">
        <div>
        <input type="text" id="name" name="name" placeholder="Enter Email or Username" className="form-control" required/>
        </div>
        <input type="password" id="password" name="password" placeholder="Enter Password" minLength="8" className="form-control" required/>

        </form>
        
        <Link exact to="/home" className="primaryBtn d-flex align-items-center">
            Submit <img src="/images/nextArrowIcon.svg" className="ml-1" alt=""/>
        </Link>
        </div>
    );
}