import React, {Component} from 'react';
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './dist/header.css';
import { handleDrawerToggleChange } from '../drawer/action';

class Header extends Component{
  toggleHeader(e) {
    const navMenu = document.querySelectorAll(".navigation-menu");
    for (let i = 0; i < navMenu.length; i++) {
        navMenu[i].classList.toggle("Navbar__ToggleShow");
    }
    // document.getElementById("navigation-bar").style.borderBottom = "2px solid #0562e8";
}
handleDrawerToggle(e){
    this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
  }
  componentWillMount(){
      console.log('will mount')
  }
    render(){
        return(
            <header className="header-section header-fixed" id="header">
              
                <nav id="navigation-bar" className={this.props.toggleStatus ? "navigation-bar" : "navigation-bar closed"}>
                    <div className="brand-wrapper">
                        <div className="brand-image">
                            <NavLink to="/" className="brand-logo">
                                <figure> 
                                    <img src={require('./dist/xenonstack-logo-big.png')} alt="XenonStack" className="logo-md" />
                                    <img src={require('./dist/xenonstack-logo-xs.png')} className="logo-xs" alt="XenonStack" />
                                </figure>
                            </NavLink>
                        </div>
                        <div className="drawer-toggle" id="drawer-toggle" onClick={this.handleDrawerToggle.bind(this)}>
                            <i className="material-icons">menu</i>
                        </div>
                    </div>
                    <div className="toggle-topMenu"  onClick={this.toggleHeader.bind(this)} id="toggle-topMenu">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                        <div className="four"></div>
                    </div>
                    <div className="navigation-menu nav-right">
                        <ul className="navbar-menu" id="navigation-menu-right">
                            <li className=""><a href="javascript:void(0);" className="nav-links">Messages</a></li> 
                            <li className=""><a href="javascript:void(0);" className="nav-links">Notifications </a></li> 
                            <li className=""><a href="javascript:void(0);" className="nav-links">Logout </a></li> 
                        </ul>
                    </div>
                </nav>
            
        </header>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}

export default withRouter(connect(mapStateToProps)(Header));
