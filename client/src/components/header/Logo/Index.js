import React, { Component } from "react";
import Logo from "./Logo";
import Name from "./Name";

export default class Index extends Component {
  render() {
    return (
      <div className="col-auto">
        <Logo />
        <Name/>
      </div>
    );
    }
  }