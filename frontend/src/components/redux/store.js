import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchFoodDataReducer, getMealLogsFromDbReducer, logFoodToDbReducer, setFoodDataToLogReducer } from "./reducers/foodLogReducers";
import { userLoginReducer, userRegisterReducer, updateUserAccountReducer, userAccountDetailsReducer } from "./reducers/userReducers";

const initialState = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
    foodItemData: {
        foodItem: localStorage.getItem('foodItem') ? JSON.parse(localStorage.getItem('foodItem')) : {},
    }
}


const reducer = combineReducers({
    resultsList: fetchFoodDataReducer,
    foodItemData: setFoodDataToLogReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    logFoodtoDb: logFoodToDbReducer,
    updateUserAccount: updateUserAccountReducer,
    userAccountDetails: userAccountDetailsReducer,
    getMealLogsFromDb: getMealLogsFromDbReducer,
});

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
