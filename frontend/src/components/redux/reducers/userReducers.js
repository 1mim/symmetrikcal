import { UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_RESET, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, GET_ACCOUNT_DETAILS_REQUEST, GET_ACCOUNT_DETAILS_SUCCESS, GET_ACCOUNT_DETAILS_FAIL } from "../constants/userConstants";


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
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

export const updateUserAccountReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return { loading: true };
        case UPDATE_USER_SUCCESS:
            return { loading: false, success: true };
        case UPDATE_USER_FAIL:
            return { loading: false, error: action.payload };
        case UPDATE_USER_RESET:
            return {};
        default:
            return state;
    }
}

export const userAccountDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACCOUNT_DETAILS_REQUEST:
            return { loading: true };
        case GET_ACCOUNT_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case GET_ACCOUNT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
