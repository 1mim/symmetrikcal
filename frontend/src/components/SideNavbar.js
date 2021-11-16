import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from './redux/actions/userActions';

const SideNavbar = () => {

    const dispatch = useDispatch()

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
            </div>

            <div>Username + target kcal and current weight here.</div>
            <div> <button className='login2' onClick={handleLogout}>logout</button></div>
        </div>
    )
}

export default SideNavbar
