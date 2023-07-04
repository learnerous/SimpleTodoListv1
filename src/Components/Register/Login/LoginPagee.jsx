import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {login} from "../../ServiceContext/AuthServices";

export default function SignInPage() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const SubmitLog = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (error) {
            console.error('error', error);
        }
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form >
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text"  name="first_name" required onChange={(e)=>setUsername(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password"  name="password" required  onChange={(e)=>setPassword(e.target.value)}/>
                </p>
                <Link to="/TodoList">
                    <button id="sub_btn" type="submit" onClick={()=>SubmitLog}>Login</button>
                </Link>

            </form>

        </div>

    )

}
