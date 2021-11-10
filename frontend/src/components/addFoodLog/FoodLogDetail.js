import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFoodDataToLogValues } from '../redux/actions/foodLogActions';

const FoodLogDetail = () => {

    const { loading, error, foodItem } = useSelector(state => state.foodItemData)

    const [servingSize, setServingSize] = useState(100);
    const updateServingSize = (e) => {
        setServingSize(e.target.value)
    }

    const dispatch = useDispatch()
    const updateValues = (e) => {
        e.preventDefault()
        dispatch(updateFoodDataToLogValues(foodItem, servingSize))
    }

    return (
        <div>
            {loading ? <p></p> :
                error ? <p>{error}</p> : (
                    <div>
            <h3>{foodItem.name}</h3>
            <h5>{Math.round((foodItem.calories + Number.EPSILON) * 100) / 100}kcal</h5>
            <h5>Carbs: {Math.round((foodItem.carbs + Number.EPSILON) * 100) / 100}g</h5>
            <h5>Protein: {Math.round((foodItem.protein + Number.EPSILON) * 100) / 100}g</h5>
            <h5>Fats: {Math.round((foodItem.fats + Number.EPSILON) * 100) / 100}g</h5>

            <form onSubmit={updateValues}>
            {/* <form> */}
            <input className="search" onChange={updateServingSize} type="text" value={servingSize} placeholder={foodItem.servingSize}></input>
            </form>
          </div>      )}
        </div>
    )
}

export default FoodLogDetail
