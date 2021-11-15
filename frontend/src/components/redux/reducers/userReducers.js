import { SET_ACCOUNT_DETAILS, SET_ACCOUNT_MACROS, SET_ACCOUNT_WEIGHT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

// export const createNewUserReducer = (state = { newUser: {} }, action) => {
//     switch (action.type) {
//         case SET_ACCOUNT_DETAILS:
//             return { ...state, newUser: action.payload };
//         case SET_ACCOUNT_MACROS:
//             return { ...state, newUser: action.payload };
//         case SET_ACCOUNT_WEIGHT:
//             return { ...state, newUser: action.payload };
//         default:
//             return state;
//     }
// };