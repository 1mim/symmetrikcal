import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const WelcomeScreen = () => {
    return (
        <div className='welcomecontain'>
            <div className='center'>
                <div className='introp'>
                    Find your balance. Keep your kcalories,
                </div>
                <div className='introbrand'>
                    symmetri<em>kcal</em>.
                    </div>
            <div>
                <Link to="/login"><button className='login'>Login</button></Link>
                <Link to="/signup"><button className='login'>Sign Up</button></Link>
            </div>

            </div>
        </div>
    )
}

export default WelcomeScreen
