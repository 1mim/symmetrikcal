import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBreakfast, filterDinner, filterLunch, filterSnack, getTodayMealLogs } from '../redux/actions/foodLogActions';
import SideNavbar from '../SideNavbar';
import DashboardMealLogSection from './DashboardMealLogSection';
import './dashboardstyle.css'
import OverviewStats from './OverviewStats';
import WeightWatcher from './WeightWatcher';



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

    useEffect(() => {
        if(todayLogs){
        dispatch(filterBreakfast(todayLogs));
        dispatch(filterLunch(todayLogs));
        dispatch(filterDinner(todayLogs));
        dispatch(filterSnack(todayLogs));
        }
    }, [dispatch, todayLogs])

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const moment = require("moment");
    const today = moment().format("dddd, MMMM Do YYYY");
    
    const greeting = (name) => {
        if (moment().hour() === 1 ||
            moment().hour() === 2 ||
            moment().hour() === 3 ||
            moment().hour() === 4 ||
            moment().hour() === 5 ||
            moment().hour() === 6 ||
            moment().hour() === 7 ||
            moment().hour() === 8 ||
            moment().hour() === 9 ||
            moment().hour() === 10 ||
            moment().hour() === 11) {
            return `Good morning, ${capitalize(name)}`
        } else if (moment().hour() === 12 ||
                    moment().hour() === 13 ||
                    moment().hour() === 14 ||
                    moment().hour() === 15 ||
                    moment().hour() === 16 ||
                    moment().hour() === 17 ||
                    moment().hour() === 18 ) {
            return `Good afternoon, ${capitalize(name)}`
        } else {
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
                                    
                                    <DashboardMealLogSection todayLogs={todayLogs} round2Digits={round2Digits} breakfast={breakfast} lunch={lunch} dinner={dinner} snack={snack}/>
                    </div>

                    <div>
                                    <WeightWatcher userInfo={userInfo}/>
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
