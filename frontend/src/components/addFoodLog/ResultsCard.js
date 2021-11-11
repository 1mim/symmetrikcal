import React from 'react'
import { useDispatch } from 'react-redux'
import { setFoodDataToLog } from '../redux/actions/foodLogActions'

const ResultsCard = ({ food }) => {
    
    const dispatch = useDispatch()

    const selectFood = (e) => {
        e.preventDefault()
        dispatch(setFoodDataToLog(food))

    }

    return (
        <div className="result-card" onClick={selectFood}>
            <div className="result-content">
            <div>{food.food.label}</div>
                <div className="result-content-kcal">{Math.round(food.food.nutrients.ENERC_KCAL)}kcal
                    {/* <button onClick={selectFood}>select</button> */}
                </div>
                </div>
        </div>
    )
}

export default ResultsCard
