// fetching from edamam/displaying the results
export const FETCH_FOOD_EDAM_REQUEST = 'FETCH_FOOD_EDAM_REQUEST';
export const FETCH_FOOD_EDAM_SUCCESS = 'FETCH_FOOD_EDAM_SUCCESS';
export const FETCH_FOOD_EDAM_FAIL = 'FETCH_FOOD_EDAM_FAIL';

// selecting that food item and passing its data in an object
export const SELECT_FOOD_ITEM = 'SELECT_FOOD_ITEM';

//updating the values of the food item
export const UPDATE_FOOD_ITEM_VALUES = 'UPDATE_FOOD_ITEM_VALUES';

//setting the mealtype of the foodlog
export const SET_FOOD_MEALTYPE = 'SET_FOOD_MEALTYPE';

//selecting the date if you want
export const SELECT_FOOD_DATE = 'SELECT_FOOD_DATE';

//logging food to backend after setting all the states
export const LOG_FOOD_REQUEST = 'LOG_FOOD_REQUEST';
export const LOG_FOOD_SUCCESS = 'LOG_FOOD_SUCCESS';
export const LOG_FOOD_FAIL = 'LOG_FOOD_FAIL';
export const LOG_FOOD_RESET = 'LOG_FOOD_RESET';

//get all meal logs data from backend
export const GET_FOOD_DATA_REQUEST = 'GET_FOOD_DATA_REQUEST';
export const GET_FOOD_DATA_SUCCESS = 'GET_FOOD_DATA_SUCCESS';
export const GET_FOOD_DATA_FAIL = 'GET_FOOD_DATA_FAIL';

//get todays meal logs data from backend
export const GET_TODAY_DATA_REQUEST = 'GET_TODAY_DATA_REQUEST';
export const GET_TODAY_DATA_SUCCESS = 'GET_TODAY_DATA_SUCCESS';
export const GET_TODAY_DATA_FAIL = 'GET_TODAY_DATA_FAIL';

//filter by meal types
export const FILTER_BREAKFAST = 'FILTER_BREAKFAST';
export const FILTER_LUNCH = 'FILTER_LUNCH';
export const FILTER_DINNER = 'FILTER_DINNER';
export const FILTER_SNACK = 'FILTER_SNACK';

//get meals grouped by dates
export const GROUP_BY_DATE_REQUEST = 'GROUP_BY_DATE_REQUEST';
export const GROUP_BY_DATE_SUCCESS = 'GROUP_BY_DATE_SUCCESS';
export const GROUP_BY_DATE_FAIL = 'GROUP_BY_DATE_FAIL';

//filter all logs by date
// export const FILTER_BY_DATE = 'FILTER_BY_DATE';