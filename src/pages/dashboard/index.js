import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Demo from './demo/demo';

class DemoComponent extends Component {
    render() {
        return (
            <div className="dashboard-content-container">
                <Switch>
                    <Route exact path="/demo" component={Demo} />
                </Switch>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { toggleStatus } = state.appReducer;
    const { auth } = state.LoginReducer;
    return { toggleStatus, auth }
}

export default withRouter(connect(mapStateToProps)(DemoComponent));