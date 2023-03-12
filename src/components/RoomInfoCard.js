import React, {useEffect, useState} from "react";
import style from "../styles/roomCard.module.css";
import data from "../data/roomCard.json";
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";
export default function RoomInfoCard(props){
    return(
        <>
        {data.map((item) => (
            <div>
                <div>
                    <div className={style.roomCardContainer}>
                        <h6>{item.title}</h6>
                        <h2>{item.sub_title}</h2>
                        <div className={style.roomMembers}>
                            <div>
                            <img src="/images/deepak.jpeg" alt=""/>
                            <img src="/images/akshat.jpeg" alt=""/>
                            </div>
                            <div>
                                {item.members.map((person) => (
                                <p>{person.first_name}{person.last_name} <BsChatDots/></p>
                                ))}
                                <p className="d-flex align-items-center">
                                    <span className="mr-2">1.8</span>
                                    <BsFillPersonFill/>
                                    <span className="mx-2"></span>{"   "}
                                    <span className="mr-2">5</span><BsChatDotsFill/>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}
