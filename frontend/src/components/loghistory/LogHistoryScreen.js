import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar'
import LogCard from './LogCard'
import './history.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMealLogs, groupByDate } from '../redux/actions/foodLogActions'
import LogHistoryChart from './LogHistoryChart'

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
            
            <div className="dashboard-page-container">
                <div className="history-left-container">
                    {loading ? 'loading...' :
                        error ? { error } : (
                            // mealLogs.map((meal) => (
                            // <LogHistoryChart key={meal._id} meal={meal} round2Digits={round2Digits} moment={moment} date={meal[0].date}/>)
                          
                            <LogHistoryChart meal={mealLogs} round2Digits={round2Digits} moment={moment}/>
                            )
                    }
                </div>
                    
                    
                            <div className="history-right-container">
                               <div className="loghistory-title">Log History</div>
                           {loading ? 'loading...' :
                error ? { error } :
                    (mealLogs.map((meal) => (
                        <LogCard key={meal._id} meal={meal} round2Digits={round2Digits} moment={moment} date={meal[0].date}/>)
                                ))}
                </div>
            </div>
           
        </div>
    )
}

export default LogHistoryScreen
