import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="backdrop" onClick={this.props.click} />;
  }
}
