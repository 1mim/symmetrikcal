import React from 'react'

const MealLogOverview = ({ round2Digits, meal, mealname, today }) => {
    return (
        <div>
            <div className="dateday">{today}</div>
                            <h2>{mealname}</h2>
                                
                                <div className="overview-content">
                                <div className=""><label className="macros">Total Carbs:</label></div>
                                <div className="macrosvalue">{round2Digits(meal.map((log) => log.carbs).reduce((prev, curr) => prev + curr, 0))}g</div>
                                </div>

                                <div className="overview-content">
                                <div className=""><label className="macros">Total Protein:</label></div>
                                <div className="macrosvalue">{round2Digits(meal.map((log) => log.protein).reduce((prev, curr) => prev + curr, 0))}g</div>
                                </div>

                                <div className="overview-content">
                                <div className=""><label className="macros">Total Fats:</label></div>
                                <div className="macrosvalue">{round2Digits(meal.map((log) => log.fats).reduce((prev, curr) => prev + curr, 0))}g</div>
                                </div>

                                <div className="overview-content">
                                <div className=""><label className="macros">Total Calories:</label></div>
                                <div className="macrosvalue">{Math.round(meal.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0))}kcal</div>
                                </div>
        </div>
    )
}

export default MealLogOverview
