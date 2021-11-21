import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar'
import LogCard from './LogCard'
import './history.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMealLogs, groupByDate } from '../redux/actions/foodLogActions'
import LogHistoryChart from './LogHistoryChart'
import { Line } from 'react-chartjs-2';

const LogHistoryScreen = () => {

    const dispatch = useDispatch()
    
    const moment = require("moment");
   
    const { userInfo } = useSelector(state => state.userLogin);
    const { mealLogs, loading, error, success } = useSelector(state => state.filterByDate);

    useEffect(() => {
        dispatch(groupByDate())
    }, [dispatch])

    const round2Digits = (value) => {
        return Math.round((value + Number.EPSILON) * 100) / 100
    }

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)
    const [d, setD] = useState(0)
    const [e, setE] = useState(0)
    const [f, setF] = useState(0)

    const [dayA, setDayA] = useState(moment().format("ddd, D MMM YY"))
    const [dayB, setDayB] = useState(moment().format("ddd, D MMM YY"))
    const [dayC, setDayC] = useState(moment().format("ddd, D MMM YY"))
    const [dayD, setDayD] = useState(moment().format("ddd, D MMM YY"))
    const [dayE, setDayE] = useState(moment().format("ddd, D MMM YY"))
    const [dayF, setDayF] = useState(moment().format("ddd, D MMM YY"))


    useEffect(() => {
        if(mealLogs && success){
            setA(Math.round(mealLogs[0].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0)));
            setB(Math.round(mealLogs[1].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0)));
            setC(Math.round(mealLogs[2].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0)));
            setD(Math.round(mealLogs[3].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0)));
            setE(Math.round(mealLogs[4].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0)));
            // setF(Math.round(mealLogs[5].map((log) => log.calories).reduce((prev, curr) => prev + curr, 0)));

            setDayA(moment(mealLogs[0][0].date).format("ddd, D MMM YY"));
            setDayB(moment(mealLogs[1][0].date).format("ddd, D MMM YY"));
            setDayC(moment(mealLogs[2][0].date).format("ddd, D MMM YY"));
            setDayD(moment(mealLogs[3][0].date).format("ddd, D MMM YY"));
            setDayE(moment(mealLogs[4][0].date).format("ddd, D MMM YY"));
            // setDayF(moment(mealLogs[5][0].date).format("ddd, D MMM YY"));

        }
    }, [success, mealLogs, moment])

    return (
        <div>
             <div className="navbar-container">
        <SideNavbar />
        </div>
            
            <div className="dashboard-page-container">
                
                    {/* {loading ? 'loading...' :
                        error ? { error } : (
                            // mealLogs.map((meal) => (
                            // <LogHistoryChart key={meal._id} meal={meal} round2Digits={round2Digits} moment={moment} date={meal[0].date}/>)
                          
                            <LogHistoryChart meal={mealLogs} round2Digits={round2Digits} moment={moment}/>
                            )
                    } */}
                    {/* <LogHistoryChart round2Digits={round2Digits} moment={moment}/> */}
                    {loading ? 'loading...' :
                        error ? { error } :
                        
                        (<div className="history-left-container">
                            <LogHistoryChart
                                a={a} b={b} c={c} d={d} e={e} f={f} dayA={dayA} dayB={dayB} dayC={dayC} dayD={dayD} dayE={dayE} dayF={dayF} userInfo={userInfo}
                            />
                        </div>
                        )}
               
                    
                    
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
