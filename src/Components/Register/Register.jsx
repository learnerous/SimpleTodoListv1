import React from 'react'
import {Link} from "react-router-dom";
import "./Register.css";
function Register() {
    return (
        <div className="Register__Container">

            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now </p>
            <div className="buttons text-center">
                    <Link to="/login">
                        <button className="primary-button" Link>log in</button>
                    </Link>
                    <Link to="/Subscribe">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                    </Link>
            </div>

        </div>
    )
}

export default Register
