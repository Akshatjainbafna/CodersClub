import React from "react";
import style from "../styles/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import { returnStatement } from "@babel/types";
import {input} from "antd";
import SubHeader from "../components/SubHeader";
export default function Explore(){
    const{ people, conversation}=data;
    return(
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="EXPLORE" />
                <input style={{
                    backgroundColor: "#f4f4f4",
                    borderRadius: "0.8em",
                    padding: "0.3em 1em",
                    border: "none",
                    boxShadow: "none",
                    width: "100%"
                }}
                size="large" 
                placeholder="Find People and Rooms" 
                prefix= {<img src="/images/search.png" />}
                >
                </input>
            </div>
            <h6>People to Follow</h6>
            <div className={style.peopleContainer}>
                {people.map((item) => (
                    <div>
                    <div className="d-flex align-items-center">
                        <img src="/images/user-img.jpg"/>
                        <div className="ml-2">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            </div>
                    </div>
                    <button>Follow</button>
                    </div>
                ))}
                <button className={style.showMore}>
                    Show more People<DownOutlined/>
                </button>

            </div>
            <h6>Find Conversations About...</h6>
                    <div className="row mx-0">
                        {conversation.map((item) =>(
                            <div className="col-6 px-2 mb-3"> 
                            <div className={style.conversationCard}>
                                <h6>
                                    <FireOutlined/>
                                    {item.title}
                                </h6>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            </div>
                        ))}
                        </div>
        </div>
    );
}