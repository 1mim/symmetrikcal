import React from 'react'

const MealLogOverview = ({ round2Digits, meal, mealname, today }) => {
    return (
        <div>
            <div className="mealname">{mealname}</div>
            <div className="dateday">{today}</div>
                
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
                <div className=""><label className="macros-kcal">Total Calories:</label></div>
                <div className="macrosvalue"><h2>{Math.round(meal.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0))}kcal</h2></div>
                </div>
        </div>
    )
}

export default MealLogOverview
