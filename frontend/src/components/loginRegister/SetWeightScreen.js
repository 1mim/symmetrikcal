import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateUserInfo } from '../redux/actions/userActions';

const SetWeightScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // import two selectors:
    // one to get the user by id to display name,
    // the other to update the account data
    const { userInfo } = useSelector(state => state.userLogin);
    const { loading, user, error } = useSelector(state => state.userAccountDetails);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = useSelector(state => state.updateUserAccount);

    const [targetWeight, setTargetWeight] = useState(0);
    const [currentWeight, setCurrentWeight] = useState(0);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserInfo(userInfo.name, userInfo.email, userInfo.password, userInfo.targetKcal, userInfo.targetCarbs, userInfo.targetProtein, userInfo.targetFats, currentWeight, targetWeight))
        navigate('/newlog', {replace: true})
    };

    // useEffect(() => {
    //     if (successUpdate) {
    //         navigate('/newlog', {replace: true})
    //     }
    // }, [navigate, successUpdate])

    return (
        <div className='welcomecontain'>
        <div className='loginform'>

            <div className='formleft'>
                <div className='pleft'>
                        Welcomme to 
                        symmetri<em>kcal</em><br/>
                        {user.name ? user.name.toUpperCase() : 'friend'}.<br/>
                        Set your target macronutrients
                        and weight to get started.
                </div>
            </div>

            <div className='formright'>
                    <div className="setmacweight">2/2</div>
                    <div className='greeting'>Set Weight Goals</div>
                    <div className='middle'>
                    <form onSubmit={handleSubmit}>
                {loading && <div>loading..</div>}
                {error && <div>{error}</div>}
                <input className="login" type="number" id="targetWeight" placeholder="Enter target weight" required onChange={(e) => setTargetWeight(e.target.value)}></input>
                <input className="login" type="number" id="currentWeight" placeholder="Enter current weight" required onChange={(e) => setCurrentWeight(e.target.value)}></input>
                <button className="login2" type="submit">Get Started</button>
                </form>
                </div>
            
            </div>

            
        </div>
    </div>
    )
}

export default SetWeightScreen
