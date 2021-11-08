import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchFoodDataReducer } from "./reducers/foodLogReducers";

const reducer = combineReducers({
    resultsList: fetchFoodDataReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;