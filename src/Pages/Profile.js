import React from "react";
import style from "../styles/profile.module.css";
import exploreStyle from "../styles/explore.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";
import { Button } from "antd";

export default function Profile(){
    return(
        <>
        <div className={style.profileContainer}>
            <div className={exploreStyle.header}>
                <div className={'${exploreStyle.head} text-right mb-0 '}>
                    <Link to="/home">
                        <img src="/images/arrow.png" className={exploreStyle.arrow_icon} />
                    </Link>
                    <div className={style.actionBtn}>
                        <BsAt/>
                        <BsUpload/>
                        <AiOutlineSetting/>
                    </div>
                </div>
            </div>
            <img src="/images/akshat.jpeg" className={style.profileImage} />
            <h4>Akshat Bafna</h4>
            <p>Blank </p>
            <div className={style.follow}>
                <p>
                    <span>1</span>Followers </p>
                <p>
                    <span>1 </span>Following
                </p>
            </div>
            <button>Add a Bio</button>
            <div className="mb-4">
                <button>

                <AiOutlineTwitter /> Add Twitter
                </button>
                <button>

                <AiOutlineInstagram /> Add Twitter
                </button>
            </div>
            <div className={style.nominated}>
                <img src="/images/deepak.jpeg" />
                <div>
                    <p>
                        Joined 14-July-2021
                    </p>
                    <p>
                        Nominated by <span>
                            Deepak Sen
                        </span>
                    </p>
                </div>
            </div>
            <p>Member of</p>
            <button className={style.addMemberBtn}>
                <BsPlus />
            </button>
        </div>
        </>
    );
}