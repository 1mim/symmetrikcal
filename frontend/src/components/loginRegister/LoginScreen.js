import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/userActions';
import './login.css';


const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { userInfo, loading, error } = useSelector(state => state.userLogin)

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        navigate('/newlog', {replace: true})
        // navigate(-1)
    }
    
    // useEffect(() => {
    //     if (!userInfo === {}) {
    //         navigate('/newlog', {replace: true})
    //         // navigate(-1)
    //     }
    // }, [navigate, userInfo])

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
                
                        <div className='greeting'>Login</div>
                    <div className='middle'>
                    <form onSubmit={handleLogin}>
                    {loading && <div>loading..</div>}
                    {error && <div>{error}</div>}
                    <input className="login" type="email" id="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)}></input>
                    <input className="login" type="password" id="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}></input>
                    <button className='login2' type='submit'>Login</button>
                    </form>
                    </div>
                
                <div className="bottomliner">
                    Dont have an account? <Link to="/signup"><span className='createacc'>Create one now.</span></Link>
                </div>
                </div>

                
            </div>
        </div>
    )
}

export default LoginScreen
