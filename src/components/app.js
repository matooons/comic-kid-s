import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sidedrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      // <Router>
      <div style={{ height: "100%" }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <h1>bob</h1>
          <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>

          {/* <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-me" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div> */}
        </main>
      </div>
      // </Router>
    );
  }
}
