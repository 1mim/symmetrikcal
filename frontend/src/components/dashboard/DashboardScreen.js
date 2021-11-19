import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodayMealLogs } from '../redux/actions/foodLogActions';
import SideNavbar from '../SideNavbar';
import DashboardMealLogSection from './DashboardMealLogSection';
import './dashboardstyle.css'
import OverviewStats from './OverviewStats';



const DashboardScreen = () => {

    const dispatch = useDispatch()

    const { userInfo } = useSelector(state => state.userLogin);
    const { user } = useSelector(state => state.userAccountDetails);

    // today's logs
    const { todayLogs, loading, error } = useSelector(state => state.getTodayMeals);
    const { breakfast, lunch, dinner, snack } = useSelector(state => state.filterByMealTypes);

    useEffect(() => {
        dispatch(getTodayMealLogs())
    }, [dispatch])

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const moment = require("moment");
    const today = moment().format("dddd, MMMM Do YYYY");
    
    const greeting = (name) => {
        if (moment().hours(4, 5, 6, 7, 8, 9, 10, 11)) {
            return `Good morning, ${capitalize(name)}`
        } else if (moment().hours(12, 13, 14, 15, 16, 17, 18)) {
            return `Good afternoon, ${capitalize(name)}`
        } else if (moment().hours(19, 20, 21, 22, 23)){
            return `Good evening, ${capitalize(name)}`
        }
    }

    const round2Digits = (value) => {
        return Math.round((value + Number.EPSILON) * 100) / 100
    }

    return (
        <div>
            <div className="navbar-container">
        <SideNavbar />
        </div>
            {loading ? 'loading...' :
                error ? { error } :
                    (
        <div className="dashboard-page-container">
                <div className="dashboard-left-container">

                    <div className="dashboard-top-banner">
                        <div className="banner-date">{today}</div>
                        <div className="banner-greeting">{greeting(userInfo.name)}</div>
                    </div>
                    
                    <div>
                                    
                                    <DashboardMealLogSection todayLogs={todayLogs} round2Digits={round2Digits}/>
                    </div>

                    <div className="dashboard-weight">
                        weight watcher kiap to 3fr by 2fr
                    </div>

                </div>
                
                
                <div className="dashboard-right-container">
                    <OverviewStats targetKcal={userInfo.targetKcal} todayLogs={todayLogs} userInfo={userInfo} round2Digits={round2Digits} />
                </div>
            </div>
                    )}
        </div>
    )
}

export default DashboardScreen
