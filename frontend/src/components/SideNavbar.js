import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from './redux/actions/userActions';

const SideNavbar = () => {

    const dispatch = useDispatch()

    const { userInfo } = useSelector(state => state.userLogin);
    const { loading, user, error } = useSelector(state => state.userAccountDetails);

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <div><h3>symmetri<em>kcal</em></h3></div>
            {/* <div><h3><em>kcal</em></h3></div> */}
            <div className='navbarlinks'>
                <NavLink className={(navData) => navData.isActive ? 'navbarlinks.active' : ''} to='/home'><div>Overview</div></NavLink>
                <NavLink to='/diary'><div>Diary</div></NavLink>
                <NavLink to='/newlog'><div>New Log</div></NavLink>
                <NavLink to='/loghistory'><div>History</div></NavLink>
                <NavLink to='/myaccount/:id'><div>Profile</div></NavLink>
                <button className='login2' onClick={handleLogout}>logout</button>
            </div>

            {loading ?
                <div>loading..</div> :
                <div>{capitalize(userInfo.name)}<br />
                    {userInfo.targetKcal}kcal | {userInfo.currentWeight}kg</div>}
            {/* <div> <button className='login2' onClick={handleLogout}>logout</button></div> */}
        </div>
    )
}

export default SideNavbar
