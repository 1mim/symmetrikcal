import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchFoodDataReducer, setFoodDataToLogReducer } from "./reducers/foodLogReducers";

// const initialState = {
//     listOfResults: {
//         results: localStorage.getItem('results') ? JSON.parse(localStorage.getItem('results')) : []
//     }
// }

const reducer = combineReducers({
    resultsList: fetchFoodDataReducer,
    foodItemData: setFoodDataToLogReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;