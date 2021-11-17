import React, {Component} from 'react';
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class NavItem extends Component{

    render(){
        return (
          <li className="drawer-item">
            <NavLink to={this.props.navURL} className="drawer-link">
                {!this.props.navMenuImage  &&
                    <i className={this.props.navMenuIcon} aria-hidden="true"></i>
                }
                {this.props.navMenuImage &&
                    <img src={require('./dist/'+this.props.navMenuImage)} alt={this.props.navMenuTitle}/>
                }
              <span className="navmenu-item">{this.props.navMenuTitle}</span>
            </NavLink>
          </li>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps)(NavItem));
