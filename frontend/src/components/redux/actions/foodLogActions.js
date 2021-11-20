import axios from "axios"
import { FETCH_FOOD_EDAM_FAIL, FETCH_FOOD_EDAM_REQUEST, FETCH_FOOD_EDAM_SUCCESS, FILTER_BREAKFAST, FILTER_BY_DATE, FILTER_DINNER, FILTER_LUNCH, FILTER_SNACK, GET_FOOD_DATA_FAIL, GET_FOOD_DATA_REQUEST, GET_FOOD_DATA_SUCCESS, GET_TODAY_DATA_FAIL, GET_TODAY_DATA_REQUEST, GET_TODAY_DATA_SUCCESS, GROUP_BY_DATE_FAIL, GROUP_BY_DATE_REQUEST, GROUP_BY_DATE_SUCCESS, LOG_FOOD_FAIL, LOG_FOOD_REQUEST, LOG_FOOD_RESET, LOG_FOOD_SUCCESS, SELECT_FOOD_DATE, SELECT_FOOD_ITEM, SET_FOOD_MEALTYPE, UPDATE_FOOD_ITEM_VALUES } from "../constants/foodLogConstants"

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

export const setFoodDataToLog = (food) => async (dispatch, getState) => {
    const data = food;
    let servingSize = 100;
    let mealType = 'snack'
    dispatch({
        type: SELECT_FOOD_ITEM,
        payload: {
            name: data.food.label,
            calories: data.food.nutrients.ENERC_KCAL,
            carbs: data.food.nutrients.CHOCDF,
            protein: data.food.nutrients.PROCNT,
            fats: data.food.nutrients.FAT,
            servingSize,
            mealType,
            date: Date()
        }
    });
    localStorage.setItem('foodItem', JSON.stringify(getState().foodItemData.foodItem))
}

export const updateFoodDataToLogValues = (id, qty) => async (dispatch, getState) => {
    const data = id;
    let servingSize = qty / 100;
    // let prevQty = 1;
    dispatch({
        type: UPDATE_FOOD_ITEM_VALUES,
        payload: {
            name: data.name,
            calories: data.calories * servingSize,
            carbs: data.carbs * servingSize,
            protein: data.protein * servingSize,
            fats: data.fats * servingSize,
            servingSize: qty,
            mealType: data.mealType,
            date: data.date
        }
    });
    localStorage.setItem('foodItem', JSON.stringify(getState().foodItemData.foodItem))
}

export const setMealTypeSelection = (id, mealType) => async (dispatch, getState) => {
    const data = id;
    dispatch({
        type: SET_FOOD_MEALTYPE,
        payload: {
            name: data.name,
            calories: data.calories,
            carbs: data.carbs,
            protein: data.protein,
            fats: data.fats,
            servingSize: data.servingSize,
            mealType: mealType,
            date: data.date
        }
    });
    localStorage.setItem('foodItem', JSON.stringify(getState().foodItemData.foodItem))
}

export const dateSelection = (id, dateSelected) => async (dispatch, getState) => {
    const data = id;
    dispatch({
        type: SELECT_FOOD_DATE,
        payload: {
            name: data.name,
            calories: data.calories,
            carbs: data.carbs,
            protein: data.protein,
            fats: data.fats,
            servingSize: data.servingSize,
            mealType: data.mealType,
            date: dateSelected
        }
    });
    localStorage.setItem('foodItem', JSON.stringify(getState().foodItemData.foodItem))
}

//logging food
export const logFood = (values) => async (dispatch, getState) => {
    dispatch({ type: LOG_FOOD_REQUEST, payload: values });
    try {
        const { userLogin: { userInfo },
        } = getState();
        const { data } = await axios.post('/log/add', values, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({
            type: LOG_FOOD_SUCCESS,
            payload: {
                name: data.name,
                calories: data.calories,
                carbs: data.carbs,
                protein: data.protein,
                fats: data.fats,
                servingSize: data.servingSize,
                mealType: data.mealType,
                date: data.date
            }
        });
        localStorage.removeItem('foodItem');
        dispatch({ type: LOG_FOOD_RESET, payload: {} });
    } catch (error) {
        dispatch({
            type: LOG_FOOD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

//getting all meals from user
export const getMealLogs = () => async (dispatch, getState) => {
    dispatch({ type: GET_FOOD_DATA_REQUEST });
    const { userLogin: { userInfo } } = getState();
    try {
        const { data } = await axios.get('/log/list', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: GET_FOOD_DATA_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: GET_FOOD_DATA_FAIL, payload: message });
    }
}

//getting today's meals only 
export const getTodayMealLogs = () => async (dispatch, getState) => {

    const moment = require("moment");
    const today = moment().format("dddd MMMM Do YYYY");

    dispatch({ type: GET_TODAY_DATA_REQUEST });
    const { userLogin: { userInfo } } = getState();
    try {
        const { data } = await axios.get('/log/list', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({
            type: GET_TODAY_DATA_SUCCESS,
            payload: data.filter((element) => moment(element.date).format("dddd MMMM Do YYYY") === today)
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: GET_TODAY_DATA_FAIL, payload: message });
    }
}

//filtering by mealtypes
export const filterBreakfast = (data) => async (dispatch) => {
    // const { data } = await data;
    dispatch({
        type: FILTER_BREAKFAST,
        payload: data.filter((ele) => ele.mealType === "breakfast"),
    });
}

export const filterLunch = (data) => async (dispatch) => {
    // const { data } = await data;
    dispatch({
        type: FILTER_LUNCH,
        payload: data.filter((ele) => ele.mealType === "lunch"),
    });
}

export const filterDinner = (data) => async (dispatch) => {
    // const { data } = await data;
    dispatch({
        type: FILTER_DINNER,
        payload: data.filter((ele) => ele.mealType === "dinner")
    });
}

export const filterSnack = (data) => async (dispatch) => {
    // const { data } = await data;
    dispatch({
        type: FILTER_SNACK,
        payload: data.filter((ele) => ele.mealType === "snack")
    });
}

//grouping meals by dates
export const groupByDate = () => async (dispatch, getState) => {

    const moment = require("moment");
    // const today = moment().format("dddd MMMM Do YYYY");

    dispatch({ type: GROUP_BY_DATE_REQUEST });
    const { userLogin: { userInfo } } = getState();
    try {
        const { data } = await axios.get('/log/list', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({
            type: GROUP_BY_DATE_SUCCESS,
            payload: Array.from(data.reduce(
                (entryMap, e) => entryMap.set(moment(e.date).format("dddd MMMM Do YYYY"), [...entryMap.get(moment(e.date).format("dddd MMMM Do YYYY"))||[], e]),
            new Map()
            ).values())
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: GROUP_BY_DATE_FAIL, payload: message });
    }
}