import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ListData from './ListData/index';
import PostData from './PostData/index';
import EditData from './EditData/index';

class ApiRouteComponent extends Component {
    render() {
        console.log('chchchchchhcchh')
        return (
            <div className="dashboard-content-container">
                <Switch>
                    <Route exact path="/api" component={ListData} />
                    <Route exact path="/api/GetData" component={ListData} />
                    <Route exact path='/api/AddData' component={PostData} />
                    <Route exact path="/api/PutData/:id" render={props => (<EditData {...props} />)}></Route>
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

export default withRouter(connect(mapStateToProps)(ApiRouteComponent));