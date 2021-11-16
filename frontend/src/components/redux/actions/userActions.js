import axios from "axios";
import { GET_ACCOUNT_DETAILS_FAIL, GET_ACCOUNT_DETAILS_REQUEST, GET_ACCOUNT_DETAILS_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

// export const register = (name, email, password) => async (dispatch) => {
//     dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
//     try {
//         const { data } = await axios.post('/user/register', {
//             name,
//             email,
//             password,
//         });
//         dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
//         dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
//         localStorage.setItem('userInfo', JSON.stringify(data));

//     } catch (error) {
//         dispatch({
//             type: USER_REGISTER_FAIL,
//             payload: error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//         })
//     }
// }

export const register = (name, email, password, targetKcal, targetCarbs, targetProtein, targetFats, currentWeight, targetWeight) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/user/register', {
            name,
            email,
            password,
            targetKcal,
            targetCarbs,
            targetProtein,
            targetFats,
            currentWeight,
            targetWeight
        });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/user/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT });
    document.location.href = '/login';  
}

export const updateUserInfo = (name, email, password, targetKcal, targetCarbs, targetProtein, targetFats, currentWeight, targetWeight) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_USER_REQUEST,
        payload: { name, email, password, targetKcal, targetCarbs, targetProtein, targetFats, currentWeight, targetWeight }
    });
    const { userLogin: { userInfo }, } = getState();
    try {
        const { data } = await axios.put(`/user/update`, {
            name,
            email,
            password,
            targetKcal,
            targetCarbs,
            targetProtein,
            targetFats,
            currentWeight,
            targetWeight
        }, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: UPDATE_USER_FAIL, payload: message });
    }
}

export const getAccountDetails = (userId) => async (dispatch, getState) => {
    dispatch({
        type: GET_ACCOUNT_DETAILS_REQUEST,
        payload: userId
    });
    const { userLogin: { userInfo }, } = getState();
    try {
        const { data } = await axios.get(`/user/${userId}`, {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
        dispatch({ type: GET_ACCOUNT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: GET_ACCOUNT_DETAILS_FAIL, payload: message });
    }
}