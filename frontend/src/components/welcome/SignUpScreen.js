import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, register, setUserDetails } from '../redux/actions/userActions';

const SignUpScreen = () => {
    const dispatch = useDispatch();

    // const { newUser } = useSelector(state => state.newUserInfo)

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [verifyPassword, setVerifyPassword] = useState('');
 
     const handleNameChange = (e) => {
         setName(e.target.value)
     }
    
     const handleEmailChange = (e) => {
         setEmail(e.target.value)
     }
 
     const handlePasswordChange = (e) => {
         setPassword(e.target.value)
     }
    
     const handleVerifyPasswordChange = (e) => {
         setVerifyPassword(e.target.value)
     }
 
     const handleSubmit = (e) => {
         e.preventdefault();
        //  if (password !== verifyPassword) {
        //      alert('Password and confirm password do not matched.')
        //  } else {
        //  console.log('registering')
             dispatch(register(name, email, password));
        //  history.push('/signup-macros')
        
     }
    
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className='welcomecontain'>
        <div className='loginform'>

            <div className='formleft'>
                <div className='pleft'>
                        {/* {newUser.name} */}
                        Find food in our extensive collection.
                    Log meals. Monitor your progress.
                        symmetri<em>kcal</em>
                        <button className='login2' onClick={handleLogout}>logout</button>
                </div>
            </div>

            <div className='formright'>
            <form onSubmit={handleSubmit}>
                    <div className='greeting'>Create New Account</div>
                <div className='middle'>
                <input className="login" type="text" value={name} placeholder="Name" onChange={handleNameChange} />
                <input className="login" type="email" value={email} placeholder="Email" onChange={handleEmailChange} />
                <input className="login" type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
                <input className="login" type="password" value={verifyPassword} placeholder="Confirm Password" onChange={handleVerifyPasswordChange} />
                <button className='login2' type='submit' >Register</button>
                </div>
            </form>
            <div className="bottomliner">
                Already have an account? <Link to="/login"><span className='createacc'>Login here.</span></Link>
            </div>
            </div>

            
        </div>
    </div>
    )
}

export default SignUpScreen
