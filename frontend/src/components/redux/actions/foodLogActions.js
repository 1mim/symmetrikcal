import axios from "axios"
import { FETCH_FOOD_EDAM_FAIL, FETCH_FOOD_EDAM_REQUEST, FETCH_FOOD_EDAM_SUCCESS, SELECT_FOOD_ITEM, UPDATE_FOOD_ITEM_VALUES } from "../constants/foodLogConstants"

export const fetchFoodData = (input) => async (dispatch) => {
    dispatch({
        type: FETCH_FOOD_EDAM_REQUEST,
    });
    try {
        const { data } = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=56cade83&app_key=06c48b00fc0863eae8a7b66dbb8fb469&ingr=${input}&nutrition-type=cooking&category=generic-foods`);
        dispatch({
            type: FETCH_FOOD_EDAM_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: FETCH_FOOD_EDAM_FAIL,
            payload: error.message,
        })
    }
}

export const setFoodDataToLog = (food) => async (dispatch) => {
    const data = food;
    let servingSize = 1;
    dispatch({
        type: SELECT_FOOD_ITEM,
        payload: {
            name: data.food.label,
            calories: data.food.nutrients.ENERC_KCAL * servingSize,
            carbs: data.food.nutrients.CHOCDF * servingSize,
            protein: data.food.nutrients.PROCNT * servingSize,
            fats: data.food.nutrients.FAT * servingSize,
            servingSize,
            mealType: 'snack'
        }
    });

}

// export const updateFoodDataToLogValues = (qty) => async (dispatch) => {
//     dispatch({
//         type: UPDATE_FOOD_ITEM_VALUES,
//         payload: qty
//     });
// }
export const updateFoodDataToLogValues = (id, qty) => async (dispatch) => {
    const data = id;
    dispatch({
        type: UPDATE_FOOD_ITEM_VALUES,
        payload: {
            name: data.name,
            calories: data.calories * qty,
            carbs: data.carbs * qty,
            protein: data.protein * qty,
            fats: data.fats * qty,
            servingSize: qty,
            mealType: 'snack'
        }
    })
}