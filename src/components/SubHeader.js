import React from "react";
import style from "../styles/explore.module.css";
import { Link } from "react-router-dom";
export default function SubHeader(props){
    return(
        <div className={style.head}>
            <Link to="/home">
                <img src="/images/arrow.png" />
            </Link>
            <h3>{props.pageTitle}</h3>
        </div>
    );
}