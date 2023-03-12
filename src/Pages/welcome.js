import React from 'react';  
import style from "../styles/welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome(){
    return (
        <div className={style.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    Welcome to CodersClub a place to Learn from Industry experts and Community!
                </p>
                <p>
                    Anyone can join with an invite from existing user - or reserve your name and we'll text you if you have a friend on the app who can let you in. We are so gratefuk you're here and can't wait to have you join!
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link exact to="/invite" className="primaryBtn d-flex align-items-center mb-3">
                    Get your username{" "}
                </Link>
                <Link exact to="/logIn" className="align-items-center mb-3">Log-in</Link>
            </div>
        </div>
    );
}