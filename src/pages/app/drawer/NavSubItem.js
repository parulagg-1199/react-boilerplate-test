import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NavSubItem extends Component{
    render(){
        return(
            <li className="drawer-subitem">
                <NavLink to={this.props.navSubMenuUrl} className="drawer-link">  
                    <span className="navmenu-item">{this.props.navSubMenuTitle}</span>
                </NavLink>
            </li>
        )
    }
}

export default NavSubItem;
