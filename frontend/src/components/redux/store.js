import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchFoodDataReducer, setFoodDataToLogReducer } from "./reducers/foodLogReducers";

const initialState = {
    log: {
        mealDataLog: localStorage.getItem('mealDataLog') ? JSON.parse(localStorage.getItem('mealDataLog')) : {}
    }
}


// const log = {
//     mealDataLog: localStorage.getItem('mealDataLog') ? JSON.parse(localStorage.getItem('mealDataLog')) : {}
// }

const reducer = combineReducers({
    resultsList: fetchFoodDataReducer,
    foodItemData: setFoodDataToLogReducer,
});

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;