import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './login.css';


const LoginScreen = () => {

    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventdefault();
        console.log('signing in')
        // dispatch(loginAction(email, password))
    }
    return (
        <div className='welcomecontain'>
            <div className='loginform'>

                <div className='formleft'>
                    <div className='pleft'>
                        Welcome Back!<br />
                        We've missed you.
                        symmetri<em>kcal</em>
                    </div>
                </div>

                <div className='formright'>
                <form onSubmit={handleLogin}>
                        <div className='greeting'>Login</div>
                    <div className='middle'>
                    <input className="login" type="email" value={email} placeholder="email" onChange={handleEmailChange} />
                    <input className="login" type="password" value={password} placeholder="password" onChange={handlePasswordChange} />
                    <button className='login2' type='submit'>Login</button>
                    </div>
                </form>
                <div className="bottomliner">
                    Dont have an account? <Link to="/signup"><span className='createacc'>Create one now.</span></Link>
                </div>
                </div>

                
            </div>
        </div>
    )
}

export default LoginScreen
