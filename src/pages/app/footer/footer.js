import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './dist/style.css';

class Footer extends Component{
    render(){
        return(
          <footer className="footer">
             <p>© 2021 XenonStack Dashbaord. All Rights Reserved.</p>
          </footer>
        )
    }
}

function mapStateToProps(state) {
    return state
}
export default withRouter(connect(mapStateToProps)(Footer));
