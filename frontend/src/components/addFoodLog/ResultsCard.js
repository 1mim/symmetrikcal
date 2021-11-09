import React from 'react'

const ResultsCard = ({food}) => {
    return (
        <div className="result-card">
            <div className="result-content">
            <div>{food.food.label}</div>
                <div className="result-content-kcal">{food.food.nutrients.ENERC_KCAL.toFixed(0)}kcal</div>
                </div>
        </div>
    )
}

export default ResultsCard
