import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getMealLogs } from '../redux/actions/foodLogActions';
import FoodLogCard from './FoodLogCard';
import MealLogOverview from './MealLogOverview';
import "./tabs.css"

const MealLogDetails = () => {
    
    const dispatch = useDispatch()
    const { logs, loading, error } = useSelector(state => state.getMealLogsFromDb);
   
    //filtering by today's date
    const moment = require("moment");
    const today = moment().format("dddd MMMM Do YYYY");

    const [todayMealLogs, setTodayMealLogs] = useState([])

    //first useEffect to get the data from backend
    useEffect(() => {
        dispatch(getMealLogs());
    }, [dispatch])

    //second useEffect to filter the data fetched
    useEffect(() => {
        if (logs) {

            const interval = setInterval(() => {
                setTodayMealLogs(logs.filter((element) => moment(element.date).format("dddd MMMM Do YYYY") === today));
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [logs, moment, today])

  //getting breakfast data
    const breakfast = todayMealLogs.filter((ele) => ele.mealType === "breakfast");

  //getting lunch data
    const lunch = todayMealLogs.filter((ele) => ele.mealType === "lunch");

  //getting dinner data
    const dinner = todayMealLogs.filter((ele) => ele.mealType === "dinner");

  //getting snack data
    const snack = todayMealLogs.filter((ele) => ele.mealType === "snack");

    //function to round to 2 decimal places
    const round2Digits = (value) => {
        return Math.round((value + Number.EPSILON) * 100) / 100
    }
    
    return (
        <div>{loading ? 'loading...' :
        error ? { error } :
            (
            <Tabs>
    <TabList>
      <Tab>Breakfast</Tab>
      <Tab>Lunch</Tab>
      <Tab>Dinner</Tab>
      <Tab>Snack</Tab>
    </TabList>
                
                            <TabPanel>
                            <div className='content-left'>
                                {breakfast.map((log) => (
                                    <FoodLogCard key={log._Id} log={log} round2Digits={round2Digits}/>
                                ))}
                            </div>
                            <div className='content-right'>
                                <MealLogOverview round2Digits={round2Digits} meal={breakfast} today={today} mealname={'Breakfast'}/>
                            </div>
                            
            </TabPanel>
                        
            <TabPanel>
            <div className='content-left'>
                                {lunch.map((log) => (
                                    <FoodLogCard key={log._Id} log={log} round2Digits={round2Digits}/>
                                ))}
                            </div>
                            <div className='content-right'>
                                <MealLogOverview round2Digits={round2Digits} meal={lunch} today={today} mealname={'Lunch'}/>
                            </div>
                        </TabPanel>
                        
            <TabPanel>
            <div className='content-left'>
                                {dinner.map((log) => (
                                    <FoodLogCard key={log._Id} log={log} round2Digits={round2Digits}/>
                                ))}
                            </div>
                            <div className='content-right'>
                                <MealLogOverview round2Digits={round2Digits} meal={dinner} today={today} mealname={'Dinner'}/>
                            </div>
                        </TabPanel>
                        
            <TabPanel>
            <div className='content-left'>
                                {snack.map((log) => (
                                    <FoodLogCard key={log._Id} log={log} round2Digits={round2Digits}/>
                                ))}
                            </div>
                            <div className='content-right'>
                                <MealLogOverview round2Digits={round2Digits} meal={snack} today={today} mealname={'Snack'}/>
                            </div>
            </TabPanel>   
        
   
                    </Tabs>
                )}
        </div>
    )
}

export default MealLogDetails
