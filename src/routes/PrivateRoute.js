import { checkAuth } from './Route';
import React from 'react'
import {Redirect, Route} from 'react-router-dom';
/**
 *
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 * The purpose of this constant is to-
 * check wheather user is logged in or logged out,
 * if logged in - user can visit any routes (eg. /tenants, /users, /hosta)
 */

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        return checkAuth() ?
            <Component {...props}/>
            : <Redirect to='/login'/>
    }
    }/>
);
