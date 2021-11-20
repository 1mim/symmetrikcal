import React from 'react'

const LogCard = ({moment, round2Digits, meal, date}) => {
    return (
        <div className="dashboard-meallog-card">
        <div className="border-right">
                {/* <div className="mealname">{date}</div> */}
                <div className="mealname">{(moment(date).format("ddd, MMM D YYYY"))}</div>
            <div className="card-dash-macs">
                <div>
                    <div className="card-dash-macros-label">Carbs</div>
                    <div className="card-dash-values">{round2Digits(meal.map((log) => log.carbs).reduce((prev, curr) => prev + curr, 0))}g</div>
                </div>
                <div>
                    <div className="card-dash-macros-label">Protein</div>
                    <div className="card-dash-values">{round2Digits(meal.map((log) => log.protein).reduce((prev, curr) => prev + curr, 0))}g</div>
                </div>
                <div>
                    <div className="card-dash-macros-label">Fats</div>
                    <div className="card-dash-values">{round2Digits(meal.map((log) => log.fats).reduce((prev, curr) => prev + curr, 0))}g</div>
                </div>
            </div>
        </div>

        <div className="dash-macrosvalue">{Math.round(meal.map((log) => log.calories).reduce((prev, curr) => prev + curr, 0))}kcal</div>
    </div>
    )
}

export default LogCard
