import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import BasicInfoForm from './BasicInfoForm';
import EmployeeForm from './EmployeeForm';
import {ProtectedRoute} from '../../routes/ProtectedRoute'
class FormIndex extends Component {
    render() {
        console.log('che')
        return (
                <div className="dashboard-content-container">
                    <Switch>
                        <Route exact path="/form" component={BasicInfoForm} />
                        <Route path="/form/BasicInfoForm" component={BasicInfoForm} />
                        <ProtectedRoute path='/form/EmployeeForm' component={EmployeeForm}/>
                    </Switch>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    return {toggleStatus,auth}
}

export default withRouter(connect(mapStateToProps)(FormIndex));