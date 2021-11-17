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
            <div className='navbar-logo'>symmetri<em>kcal</em></div>
            {/* <div><h3><em>kcal</em></h3></div> */}
            <div className='navbarlinks'>
                <NavLink className={(navData) => navData.isActive ? 'navbarlinks.active' : ''} to='/home'><div>Dashboard</div></NavLink>
                <NavLink to='/diary'><div>Diary</div></NavLink>
                <NavLink to='/newlog'><div>New Log</div></NavLink>
                <NavLink to='/loghistory'><div>Log History</div></NavLink>
                <NavLink to='/myaccount/:id'><div>Settings</div></NavLink>
            </div>
        
            <div className="navuser">
            {loading ?
                <div>loading..</div> :
                <div className="navuser-name">{capitalize(userInfo.name)}<br />
                   <div className="navuser-info"> {userInfo.targetKcal}kcal | {userInfo.currentWeight}kg</div></div>}
                   <button className='logout' onClick={handleLogout}>logout</button>
            </div>
        
        </div>
    )
}

export default SideNavbar
