import { FETCH_FOOD_EDAM_FAIL, FETCH_FOOD_EDAM_REQUEST, FETCH_FOOD_EDAM_SUCCESS } from "../constants/foodLogConstants";

export const fetchFoodDataReducer = (state = { loading: true, results: [] }, action) => {
    switch (action.type) {
        case FETCH_FOOD_EDAM_REQUEST:
            return {
                loading: true
            };
        case FETCH_FOOD_EDAM_SUCCESS:
            return {
                loading: false,
                results: action.payload,
            };
        case FETCH_FOOD_EDAM_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}