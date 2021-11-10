import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFoodDataToLogValues } from '../redux/actions/foodLogActions';

const FoodLogDetail = () => {

    const { foodItem } = useSelector(state => state.foodItemData)

    const [servingSize, setServingSize] = useState(1);
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
            <h3>{foodItem.name}</h3>
            <h5>{foodItem.calories}</h5>
            <h5>Carbs: {foodItem.carbs}</h5>
            <h5>Protein: {foodItem.protein}</h5>
            <h5>Fats: {foodItem.fats}</h5>

            <form onSubmit={updateValues}>
            {/* <form> */}
            <input className="search" onChange={updateServingSize} type="text" value={servingSize} placeholder={foodItem.servingSize}></input>
            </form>
        </div>
    )
}

export default FoodLogDetail
