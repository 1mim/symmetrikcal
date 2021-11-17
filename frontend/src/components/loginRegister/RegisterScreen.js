import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, register } from '../redux/actions/userActions';

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo, loading, error } = useSelector(state => state.userRegister)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const macros = {
        targetKcal: 0,
        targetCarbs: 0,
        targetProtein: 0,
        targetFats: 0
    };
    
    const weight = {
        currentWeight: 0,
        targetWeight: 0,
    };
    
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== verifyPassword) {
            alert('Password and confirm password do not matched.')
        } else {
            dispatch(register(name, email, password, macros.targetKcal, macros.targetCarbs, macros.targetProtein, macros.targetFats, weight.currentWeight, weight.targetWeight));
            navigate('/set-macros', {replace: true})
            // navigate('/newlog')
        
        }
    }
         
    // useEffect(() => {
    //     if (!userInfo === {}) {
    //         navigate('/newlog', {replace: true})
    //         // navigate('/set-macros', {replace: true})
    //     }
    // }, [navigate, userInfo])

    return (
        <div className='welcomecontain'>
        <div className='loginform'>

            <div className='formleft'>
                <div className='pleft'>
                        {/* {newUser.name} */}
                        Find food in our extensive collection.
                    Log meals. Monitor your progress.
                        symmetri<em>kcal</em>
                </div>
            </div>

            <div className='formright'>
            
                    <div className='greeting'>Create New Account</div>
                    <div className='middle'>
                    {/* <form onSubmit={handleSubmit}> */}
                    <form onSubmit={handleSubmit}>
                {loading && <div>loading..</div>}
                {error && <div>{error}</div>}
                <input className="login" type="text" id="name" placeholder="Enter name" required onChange={(e) => setName(e.target.value)}></input>
                <input className="login" type="email" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}></input>
                <input className="login" type="password" id="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)}></input>
                <input className="login" type="password" id="verifyPassword" placeholder="Re-enter Password" required onChange={(e) => setVerifyPassword(e.target.value)}></input>
                <button className="login2" type="submit" >Register</button>
                </form>
                </div>
            
            <div className="bottomliner">
                Already have an account? <Link to="/login"><span className='createacc'>Login here.</span></Link>
            </div>
            </div>

            
        </div>
    </div>
    )
}

export default RegisterScreen
