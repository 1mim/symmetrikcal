import axios from "axios"
import { FETCH_FOOD_EDAM_FAIL, FETCH_FOOD_EDAM_REQUEST, FETCH_FOOD_EDAM_SUCCESS } from "../constants/foodLogConstants"

export const fetchFoodData = (input) => async (dispatch) => {
    dispatch({
        type: FETCH_FOOD_EDAM_REQUEST,
    });
    try {
        const { data } = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=56cade83&app_key=06c48b00fc0863eae8a7b66dbb8fb469&ingr=${input}&nutrition-type=cooking&category=generic-foods`);
        dispatch({
            type: FETCH_FOOD_EDAM_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FETCH_FOOD_EDAM_FAIL,
            payload: error.message,
        })
    }
}

