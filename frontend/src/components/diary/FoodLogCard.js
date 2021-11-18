import React from 'react'

const FoodLogCard = ({log, round2Digits}) => {
    return (
        <div className="foodlog-card">
        <div className="foodlog-content">
                <div>{log.name}</div>

                <div>
                    <div className="card-macros-label">Carbs</div>
                    <div className="card-values">{round2Digits(log.carbs)}g</div>
                </div>
                
                <div>
                    <div className="card-macros-label">Protein</div>
                    <div className="card-values">{round2Digits(log.protein)}g</div>   
                </div>

                <div>
                <div className="card-macros-label">Fats</div>
                    <div className="card-values">{round2Digits(log.fats)}g</div>
                </div>

            <div className="result-content-kcal">{Math.round(log.calories)}kcal
            </div>
            </div>
    </div>
    )
}

export default FoodLogCard
