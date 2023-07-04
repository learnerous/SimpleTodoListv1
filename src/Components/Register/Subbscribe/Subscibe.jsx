import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";


export default function SignUpPage() {
    const data={
        "Name":"",
        "Password":""
    }
    function AddUser(d)
    {
        axios.post("http://127.0.0.1:8000/userAdd",d).then((r)=>console.log(r)).catch((rr)=>console.log(rr))

    }
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>

                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required onChange={e=>data.Name=e.target.value} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required  onChange={e=>data.Password=e.target.value}/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <Link to="/">
                    <button id="sub_btn" type="submit" onClick={()=>AddUser(data)}>Register</button>
                </Link>


        </div>
    )

}
