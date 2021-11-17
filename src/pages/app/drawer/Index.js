import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './dist/style.css';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import NavItemGroup from './NavItemGroup';
import { handleDrawerToggleChange } from './action';

class Drawer extends Component {
  componentDidMount() {
    const slidedrop = document.querySelectorAll(".drawer-navmenu");
    for (const slideitem of slidedrop) {
      const items = slideitem.querySelectorAll(".drawer-item");
      for (const item of items) {
        const head = item.querySelector(".drawer-link");
        head.addEventListener('click', () => {
          for (const otherPanel of items) {
            if (otherPanel !== item) {
              otherPanel.classList.remove('open');
            }
          }
          item.classList.toggle('open');
        });
      }
    }
  }
  handleDrawerToggle(e) {
    this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
  }
  render() {
    return (
      <aside className={this.props.toggleStatus ? "drawer-wrapper" : "drawer-wrapper closed"}>
        <nav className="drawer-navigation">
          <span className="navgroup-title">Main </span>
          <ul className="drawer-navmenu">
            <NavItem navMenuTitle="Basic Form" navMenuImage={'account.svg'} navMenuIcon={""} navURL="/form/BasicInfoForm" />
            <NavItem navMenuTitle="Employee Form" navMenuImage={'analytics.svg'} navMenuIcon={""} navURL="/form/EmployeeForm"></NavItem>
            <NavItem navMenuTitle="High Charts" navMenuImage={'dashboard.svg'} navMenuIcon={''} navURL="/demo" />
            <NavItemGroup navMenuTitle="Integration" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
              <NavItem navMenuTitle="List User Data" navMenuImage={'account.svg'} navMenuIcon={""} navURL="/api/GetData" />
              <NavItem navMenuTitle="Add User Data" navMenuImage={'analytics.svg'} navMenuIcon={""} navURL="/api/AddData"></NavItem>
              <Link to="" navURL="/api/PutData" ></Link>
            </NavItemGroup>

            {/* <NavItem navMenuTitle="Dashbaord 4" navMenuImage={'project.svg'} navMenuIcon={''} navURL="#"/>
                        <NavItemGroup navMenuTitle="Dashbaord 5" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
                            <NavSubItem navSubMenuTitle="Sub Item 1" navSubMenuUrl="/dashboard"/>
                            <NavSubItem navSubMenuTitle="Sub Item 2" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 3" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 4" navSubMenuUrl="#"/>
                        </NavItemGroup>
                        <NavItemGroup navMenuTitle="Dashbaord 6" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
                            <NavSubItem navSubMenuTitle="Sub Item 1" navSubMenuUrl="/dashboard"/>
                            <NavSubItem navSubMenuTitle="Sub Item 2" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 3" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 4" navSubMenuUrl="#"/>
                        </NavItemGroup> */}
          </ul>
        </nav>
      </aside>
    )
  }
}

function mapStateToProps(state) {
  const { toggleStatus } = state.appReducer;
  return { toggleStatus }
}
export default withRouter(connect(mapStateToProps)(Drawer));
