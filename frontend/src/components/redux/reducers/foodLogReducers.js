import { FETCH_FOOD_EDAM_FAIL, FETCH_FOOD_EDAM_REQUEST, FETCH_FOOD_EDAM_SUCCESS, SELECT_FOOD_DATE, SELECT_FOOD_ITEM, SET_FOOD_MEALTYPE, UPDATE_FOOD_ITEM_VALUES } from "../constants/foodLogConstants";

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

export const setFoodDataToLogReducer = (state = { foodItem: {} }, action) => {
    switch (action.type) {
        case SELECT_FOOD_ITEM:
            return { ...state, foodItem: action.payload };
        case UPDATE_FOOD_ITEM_VALUES:
            return { ...state, foodItem: action.payload };
        case SET_FOOD_MEALTYPE:
            return { ...state, foodItem: action.payload }
        case SELECT_FOOD_DATE:
            return {...state, foodItem: action.payload}
        default:
            return state;
    }
}