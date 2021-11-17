import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import "./static/css/common.css";
import "./static/css/primary.css";
import "./static/css/grid.css";
import "./static/css/font-awesome.css";
import "./static/css/forms.css";
import './static/css/simple-line-icons.css';

import combineReducers from './common/reducers';

import apiMiddleware from './middleware';

import RouteComponent from './routes/Route';

const history = createHistory();
const middleware = routerMiddleware(history);

export default createHistory({forceRefresh: true});

export const store = createStore( combineReducers, 
    applyMiddleware(thunk, apiMiddleware.getApi, apiMiddleware.postApi, apiMiddleware.putApi, apiMiddleware.deleteApi, apiMiddleware.restApi, middleware));

const Rout = (
    <Provider store={store}>
        <BrowserRouter>
            <RouteComponent />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Rout, document.getElementById('root'));
