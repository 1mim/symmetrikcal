import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchFoodDataReducer, setFoodDataToLogReducer } from "./reducers/foodLogReducers";
import { createNewUserReducer, userLoginReducer } from "./reducers/userReducers";

// const initialState = {
//     log: {
//         foodItem: localStorage.getItem('foodItem') ? JSON.parse(localStorage.getItem('foodItem')) : {}
//     },
//     user: {
//         newUser: localStorage.getItem('newUser') ? JSON.parse(localStorage.getItem('newUser')) : {}
//         // setAccountDetails: localStorage.getItem('setAccountDetails') ? JSON.parse(localStorage.getItem('setAccountDetails')) : {},
//         // setAccountMacros: localStorage.getItem('setAccountMacros') ? JSON.parse(localStorage.getItem('setAccountMacros')) : {},
//         // setAccountWeight: localStorage.getItem('setAccountWeight') ? JSON.parse(localStorage.getItem('setAccountWeight')) : {},

//     }
// }
const initialState = {
    userLogin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
    log: {
        foodItem: localStorage.getItem('foodItem') ? JSON.parse(localStorage.getItem('foodItem')) : {}
    }
}


const reducer = combineReducers({
    resultsList: fetchFoodDataReducer,
    foodItemData: setFoodDataToLogReducer,
    createNewUser: createNewUserReducer,
    userLogin: userLoginReducer,
});

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;