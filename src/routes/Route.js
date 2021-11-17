import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../pages/app/header/header';
import Drawer from '../pages/app/drawer/Index';
// import DemoContainer from '../container/demo';
import {store} from '../index'
import FormIndex from '../pages/Form/index';
import DemoComponent from '../pages/dashboard/index'
import ApiRouteComponent from '../pages/integration/index'
import Auto from '../pages/autoComplete/Auto';
/**
 * This function checks wheather the user is logged in or logged out.
 * isAuthenticated === true - logged in
 * isAuthenticated === false - logged out
 * 
 * we can change it, but its name needs to be the same and
 *  it needs to return a true or false resemblance values
 */
export function checkAuth() {
    const {auth} = store.getState().LoginReducer;
    const {isAuthenticated} = auth;
    return isAuthenticated
}

class RouteComponent extends Component {
    render() {
        return (
                <div className="dashboard-wrappper">
                    <Header />
                    <Drawer/>
                    <div className={this.props.toggleStatus ? "dashboard-content-body" : "dashboard-content-body closed"}>
                        <main className="main-content-wrapper">
                            <Switch>
                                <Route path="/form" component={FormIndex} />
                                <Route exact path="/" component={Auto} />
                                <Route exact path="/demo" component={DemoComponent} /> 
                                <Route  path="/api" component={ApiRouteComponent}/>
                                
                            </Switch>
                        </main>
                    </div>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    return {toggleStatus,auth}
}

export default withRouter(connect(mapStateToProps)(RouteComponent));