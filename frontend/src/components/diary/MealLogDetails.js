import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { filterBreakfast, filterDinner, filterLunch, filterSnack, getTodayMealLogs } from '../redux/actions/foodLogActions';
import FoodLogCard from './FoodLogCard';
import MealLogOverview from './MealLogOverview';
import "./tabs.css"

const MealLogDetails = () => {
    
    const dispatch = useDispatch()
    const { todayLogs, loading, error } = useSelector(state => state.getTodayMeals);
    const { breakfast, lunch, dinner, snack } = useSelector(state => state.filterByMealTypes);
   
    //filtering by today's date
    const moment = require("moment");
    const today = moment().format("dddd MMMM Do YYYY");

    //first useEffect to get the data from backend
    useEffect(() => {
        dispatch(getTodayMealLogs())
    }, [dispatch])

     //second useEffect to filter the data fetched
    useEffect(() => {
        if(todayLogs){
        dispatch(filterBreakfast(todayLogs));
        dispatch(filterLunch(todayLogs));
        dispatch(filterDinner(todayLogs));
        dispatch(filterSnack(todayLogs));
        }
    }, [dispatch, todayLogs])

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
