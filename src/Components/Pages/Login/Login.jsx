import React from "react"
import { useState } from "react";
import './Login.css'
import { NavLink } from 'react-router-dom';
import { Home } from '../Home/Home';

export const Login = () => {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false); 
    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");
    
        if (!emaillog || !passwordlog) {
            setFlag(true);
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div className='div-container-login'>
            <div className='div-title-login'>
                <h1>Log in</h1>
                <p>Log in to rick and morty to explore.</p>
            </div>

            {home ? (

                <form className='div-container-form' onSubmit={handleLogin}>
                    <div className='div-info-login'>
                        <label className='label-info-login'>Email</label><br/>
                        <input className='input-login' type="email" onChange={(event) => setEmaillog(event.target.value)}/>
                    </div>

                    <div className='div-info-login second-div-login'>
                        <label className='label-info-login'>Password</label><br/>
                        <input className='input-login' type="password" onChange={(event) => setPasswordlog(event.target.value)}/>
                    </div>

                    <div className='div-register-login'>
                        <NavLink to='/register'><p className='link-register-login'>Create a new account.</p></NavLink>
                    </div>
                    
                    <div className='div-btn-login'>
                        <button className='btn-login'>Next</button>
                    </div>

                    {flag && (
                        alert("Invalid Credentials")
                    )}

                </form>

            ) : ( <Home /> )}

        </div>
    )
}