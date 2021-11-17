/* 
*   This reducer is used when we have implemented auth i.e. user login form
*    This is used along with PrivateRoute
*/

import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '../constants/loginConstants';

const initialState = {
    auth: {
        isAuthenticated: localStorage.getItem("token") ? true : false

    },
};
export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loginPageLoading: true
            });
        case LOGIN_SUCCESS:
            if (action.response.data.error) {
                return Object.assign({}, state, {
                    loginPageLoading: false,
                    message: action.response.data.message,
                    status: action.response.status,
                    error: true
                });
            }
            else {
                if (!!action.response.data.token && !!action.response.data.expire && !!action.response.data.sys_role) {
                    localStorage.setItem("name", !!action.response.data.name ? action.response.data.name : "");
                    localStorage.setItem("token", action.response.data.token);
                    localStorage.setItem("expire", action.response.data.expire);
                    localStorage.setItem("sys_role", action.response.data.sys_role);
                    return Object.assign({}, state, {
                        loginPageLoading: false,
                        auth: {
                            isAuthenticated: true,
                            sys_role: action.response.data.sys_role
                        },
                        status: 200,
                        loginForm: {email: "", password: ""},
                        error: false
                    });
                }
                else {
                    return Object.assign({}, state, {
                        loginPageLoading: false,
                        auth: {
                            isAuthenticated: false,
                            sys_role: ""
                        },
                        status: 200,
                        loginForm: {email: "", password: ""},
                        error: false
                    });
                }
            }
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                loginPageLoading: false,
                message: action.response.data.message,
                status: action.response.status,
                error: true
            });

        default:
            return state
    }
}
