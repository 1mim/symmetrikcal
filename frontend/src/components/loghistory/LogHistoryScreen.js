import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar'
import LogCard from './LogCard'
import './history.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMealLogs, groupByDate } from '../redux/actions/foodLogActions'

const LogHistoryScreen = () => {

    const dispatch = useDispatch()
    
    const moment = require("moment");
   
    const { mealLogs, loading, error } = useSelector(state => state.filterByDate);

    useEffect(() => {
        dispatch(groupByDate())
    }, [dispatch])

    const round2Digits = (value) => {
        return Math.round((value + Number.EPSILON) * 100) / 100
    }

    return (
        <div>
             <div className="navbar-container">
        <SideNavbar />
        </div>
            {/* {loading ? 'loading...' :
                error ? { error } :
                    ( */}
            <div className="dashboard-page-container">
                <div className="history-left-container">

                </div>
                    
                    
                            <div className="history-right-container">
                               
                           {loading ? 'loading...' :
                error ? { error } :
                    (mealLogs.map((meal) => (
                        <LogCard key={meal._id} meal={meal} round2Digits={round2Digits} moment={moment} date={meal[0].date}/>)
                                ))}
                </div>
            </div>
            {/* )} */}
        </div>
    )
}

export default LogHistoryScreen
