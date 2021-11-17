import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class NavItemGroup extends Component{
    render(){
        return (
          <li className="drawer-item is-dropdown" >
            <div className="drawer-link">
                {!this.props.navMenuImage  &&
                    <i className="material-icons" aria-hidden="true">{this.props.navMenuIcon}</i>
                }
                {this.props.navMenuImage &&
                    <img src={require('./dist/'+this.props.navMenuImage)} alt={this.props.navMenuTitle}/>
                }
                <span className="navmenu-item">{this.props.navMenuTitle}</span>
                <span class="nav-menu-icon arrow-icon"><i class="material-icons">arrow_drop_down</i></span>
            </div>
            <ul className="drawer-submenu">
                {this.props.children}
            </ul>
          </li>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps)(NavItemGroup));
