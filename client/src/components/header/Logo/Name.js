import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Name extends Component {
  render() {
    return (
      <Link to="/" className="navbar-brand">
        <h2>Users</h2>
      </Link>
    );
    }}
