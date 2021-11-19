import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterBreakfast, filterDinner, filterLunch, filterSnack } from '../redux/actions/foodLogActions';

const DashboardMealLogSection = ({todayLogs, round2Digits}) => {

    const dispatch = useDispatch()

    // const { todayLogs, loading, error } = useSelector(state => state.getTodayMeals);
    const { breakfast, lunch, dinner, snack } = useSelector(state => state.filterByMealTypes);

    useEffect(() => {
        if(todayLogs){
        dispatch(filterBreakfast(todayLogs));
        dispatch(filterLunch(todayLogs));
        dispatch(filterDinner(todayLogs));
        dispatch(filterSnack(todayLogs));
        }
    }, [dispatch, todayLogs])

    return (
        <div className="dashboard-meallog-overview">
            <div className="dashboard-meallog-card">
                <div className="border-right">
                    <div className="mealname">Breakfast</div>
                    <div className="card-dash-macs">
                        <div>
                            <div className="card-dash-macros-label">Carbs</div>
                            <div className="card-dash-values">{round2Digits(breakfast.map((log) => log.carbs).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Protein</div>
                            <div className="card-dash-values">{round2Digits(breakfast.map((log) => log.protein).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Fats</div>
                            <div className="card-dash-values">{round2Digits(breakfast.map((log) => log.fats).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                    </div>
                </div>

                <div className="dash-macrosvalue">{Math.round(breakfast.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0))}kcal</div>
            </div>
            
            <div className="dashboard-meallog-card">
            <div className="border-right">
                    <div className="mealname">Lunch</div>
                    <div className="card-dash-macs">
                        <div>
                            <div className="card-dash-macros-label">Carbs</div>
                            <div className="card-dash-values">{round2Digits(lunch.map((log) => log.carbs).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Protein</div>
                            <div className="card-dash-values">{round2Digits(lunch.map((log) => log.protein).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Fats</div>
                            <div className="card-dash-values">{round2Digits(lunch.map((log) => log.fats).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                    </div>
                </div>
                <div className="dash-macrosvalue">{Math.round(lunch.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0))}kcal</div>
            </div>
            
            <div className="dashboard-meallog-card">
            <div className="border-right">
                    <div className="mealname">Dinner</div>
                    <div className="card-dash-macs">
                        <div>
                            <div className="card-dash-macros-label">Carbs</div>
                            <div className="card-dash-values">{round2Digits(dinner.map((log) => log.carbs).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Protein</div>
                            <div className="card-dash-values">{round2Digits(dinner.map((log) => log.protein).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Fats</div>
                            <div className="card-dash-values">{round2Digits(dinner.map((log) => log.fats).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                    </div>
                </div>
                <div className="dash-macrosvalue">{Math.round(dinner.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0))}kcal</div>
            </div>
            
            <div className="dashboard-meallog-card">
            <div className="border-right">
                    <div className="mealname">Snack</div>
                    <div className="card-dash-macs">
                        <div>
                            <div className="card-dash-macros-label">Carbs</div>
                            <div className="card-dash-values">{round2Digits(snack.map((log) => log.carbs).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Protein</div>
                            <div className="card-dash-values">{round2Digits(snack.map((log) => log.protein).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                        <div>
                            <div className="card-dash-macros-label">Fats</div>
                            <div className="card-dash-values">{round2Digits(snack.map((log) => log.fats).reduce((prev, curr) => prev + curr, 0))}g</div>
                        </div>
                    </div>
                </div>
                <div className="dash-macrosvalue">{Math.round(snack.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0))}kcal</div>
            </div>
            
            
            
        </div>
    )
}

export default DashboardMealLogSection
