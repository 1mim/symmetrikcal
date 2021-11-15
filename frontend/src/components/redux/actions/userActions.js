import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

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
}


// export const register = (name, email, password) => async (dispatch) => {
//     dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
//     try {
//         const { data } = await axios.post('user/register', { name, email, password });
//         dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
//         // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
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
export const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
        const { data } = await axios.post('http://localhost:5000/user/register', { name, email, password });
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
        // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
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

// export const register = (name, email, password) => async (dispatch) => {
//     dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
//     try {
//         const { data } = await axios.post('/user/register', { name, email, password });
//         dispatch({
//             type: USER_REGISTER_SUCCESS,
//             payload: {
//                 name: data.name,
//                 email: data.email,
//                 password: data.password,
//                 // targetKcal: 0,
//                 // targetCarbs: 0,
//                 // targetProtein: 0,
//                 // targetFats: 0,
//                 // currentWeight: 0,
//                 // targetWeight: 0,
//        }
//         });
//         dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
//         localStorage.setItem('userInfo', JSON.stringify(data));
//     } catch (error) {
//         dispatch({
//             type: USER_REGISTER_FAIL,
//             payload: error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//         })
//     }
// }


// export const setUserDetails = (name, email, password) => async (dispatch, getState) => {
//     dispatch({
//         type: SET_ACCOUNT_DETAILS,
//         payload: {
//                 name: name,
//                 email: email,
//                 password: password,
//                 targetKcal: 0,
//                 targetCarbs: 0,
//                 targetProtein: 0,
//                 targetFats: 0,
//                 currentWeight: 0,
//                 targetWeight: 0,
//        }
//     })
//     localStorage.setItem('setAccountDetails', JSON.stringify(getState().newUser.setAccountDetails))
// }

// export const setUserMacros = (targetKcal, targetCarbs, targetProtein, targetFats) => (dispatch, getState) => {
//     dispatch({
//         type: SET_ACCOUNT_MACROS,
//         payload: {
//                 targetKcal: targetKcal,
//                 targetCarbs: targetCarbs,
//                 targetProtein: targetProtein,
//                 targetFats: targetFats,
//                 // currentWeight: 0,
//                 // targetWeight: 0,
//        }
//     })
//     localStorage.setItem('setAccountMacros', JSON.stringify(getState().newUser.setAccountMacros))
// }

// export const setUserWeight = (currentWeight, targetWeight) => (dispatch, getState) => {
//     dispatch({
//         type: SET_ACCOUNT_WEIGHT,
//         payload: {
//                 currentWeight: currentWeight,
//                 targetWeight: targetWeight,
//        }
//     })
//     localStorage.setItem('setAccountWeight', JSON.stringify(getState().newUser.setAccountWeight))
// }

