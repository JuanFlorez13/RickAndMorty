import React,{useState} from "react"
import './Register.css'
import { NavLink } from 'react-router-dom';
// import { Login } from "../Login/Login";

export const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");  
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();
    
        if (!name || !email || !password || !phone) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));
            setLogin(!login);
        }
    }

    return (
        <div className='div-container-login'>
            
            <div className='div-title-login'>
                <h1>Create Account</h1>
            </div>
            <div>
                
                {/* {login ? ( */}

                    <form id="form-register" className='div-container-form-register' onSubmit={handleFormSubmit}>
                        <div className='div-info-register'>
                            <label className='label-info-register'>Name</label>
                            <input  className='input-register' type="text"  onChange={(event) => setName(event.target.value)}/>
                        </div>

                        <div className='div-info-register'>
                                <label className='label-info-register'>Email</label>
                                <input className='input-register' type="email"  onChange={(event) => setEmail(event.target.value)}/>
                        </div>

                        <div className='div-info-register'>
                                <label className='label-info-register'>Password</label>
                                <input className='input-register' type="password"  onChange={(event) => setPassword(event.target.value)}/>
                        </div>

                        <div className='div-info-register'>
                                <label className='label-info-register'>Phone</label>
                                <input className='input-register' type="text"  onChange={(event) => setPhone(event.target.value)}/>
                        </div>

                        <div className='div-register-link'>
                                <NavLink to='/'><p className='link-register-link'>Login</p></NavLink>
                        </div>

                        <div className='div-btn-register'>
                                <button className='btn-register'>Next</button>
                        </div>

                        {flag && (
                            alert("Invalid")
                        )}

                    </form>

                {/* ) : ( <Login /> )} */}
            </div>
        </div>
    )
}