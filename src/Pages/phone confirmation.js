import React, {useState, Fragment} from "react";
import style from "../styles/PhoneConfirm.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation(){
    const[value, setValue]= useState();
    
    function send(e, form){
        fetch(form.action, {method:"post", body: new FormData(form)});
        console.log('You have Successfully Registered');
        e.preventDefault();
    }

    return (
    <Fragment>
    <div className={style.phoneConfirmationContainer}>
        <Link exact to="/" className={style.backBtn}>
            <img src="\images\arrow.png" alt="" />
        </Link>
        <h1>Quickly, Register Yourself</h1>
        <form method="post" action="http://localhost:5000/users/register" onSubmit="send(event, this)">
            <div> 
            <input type="text" id="username" name="username" placeholder="Enter a Username" className="form-control"  required/>
            </div>
            <div>
            <input type="email" id="email" name="email" placeholder="Enter a Unregistered Email" className="form-control"  required/>
            </div>
            <div>
            <input type="text" id="name" name="name" placeholder="Enter your fullname" className="form-control"  required/>
            </div>
            <div>
            <input type="text" id="bio" name="bio" placeholder="Add a Quick Bio" className="form-control" required/>
            </div>
            <div>
            <input type="tel" id="phoneno" name="phoneno" placeholder="Enter your Phone Number" className="form-control"  required/>
            </div>
            <div>
            <input type="text" id="password" name="password" placeholder="Set a 8 Character Password" className="form-control"  required/>
            </div>
            <div>
            <input type="password" id="password2" name="password2" placeholder="Confirm Password" className="form-control"required/>
            </div>
            <div>
            <PhoneInput international defaultCountry="IN" value={value} onChange={setValue} className="form-control" />
            </div>
            <div>
            <input id="submit" type="submit" value="Register" className="form-control"/>
            </div>
        </form>

        <p>By entering your number, you're agreeing to our{" "} <span>Terms of Service and Privacy Policy.</span>Thanks!</p>
        
        <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center">
            Next <img src="/images/nextArrowIcon.svg" className="ml-1" alt=""/>
        </Link>
    </div>
    </Fragment>
    );
}