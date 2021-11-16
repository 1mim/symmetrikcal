import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserInfo } from '../redux/actions/userActions';

const SetMacrosScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    // import two selectors:
    // one to get the user by id to display name,
    // the other to update the account data
    const { userInfo } = useSelector(state => state.userLogin);
    const { loading, user, error } = useSelector(state => state.userAccountDetails);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = useSelector(state => state.updateUserAccount);

    const [targetKcal, setTargetKcal] = useState(0);
    const [targetCarbs, setTargetCarbs] = useState(0);
    const [targetProtein, setTargetProtein] = useState(0);
    const [targetFats, setTargetFats] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserInfo(userInfo.name, userInfo.email, userInfo.password, targetKcal, targetCarbs, targetProtein, targetFats, userInfo.currentWeight, userInfo.targetWeight))
        navigate('/set-weight', {replace: true})
    };

    // useEffect(() => {
    //     if (user || successUpdate) {
    //         // navigate('/set-weight', {replace: true})
    //     }
    // }, [user, navigate, successUpdate])

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
                    <div className="setmacweight">1/2</div>
                    <div className='greeting'>Set Macronutrients</div>
                    <div className='middle'>
                    <form onSubmit={handleSubmit}>
                {loading && <div>loading..</div>}
                {error && <div>{error}</div>}
                <input className="login" type="number" id="targetKcal" placeholder="Enter target calories" required onChange={(e) => setTargetKcal(e.target.value)}></input>
                <input className="login" type="number" id="targetCarbs" placeholder="Enter target carbs" required onChange={(e) => setTargetCarbs(e.target.value)}></input>
                <input className="login" type="number" id="targetProtein" placeholder="Enter target protein" required onChange={(e) => setTargetProtein(e.target.value)}></input>
                <input className="login" type="number" id="targetFats" placeholder="Enter target fats" required onChange={(e) => setTargetFats(e.target.value)}></input>
                <button className="login2" type="submit">Next</button>
                </form>
                </div>
            
            </div>

            
        </div>
    </div>
    )
}

export default SetMacrosScreen
        