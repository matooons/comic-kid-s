import React, { Component } from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "./../SideDrawer/DrawerToggleButton";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="Navbar">
        <nav className="Navbar-navigation">
          <div>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="Navbar-logo">
            <a href="/">THE LOGO</a>
          </div>
          <div className="spacer" />
          <div className="Navbar-navigation-items">
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </div>
        </nav>
      </header>
    );
  }
}
