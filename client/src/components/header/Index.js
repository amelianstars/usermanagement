import React, { Component } from "react";
import Logo from "./Logo/Index";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-md navbar-light" id="topbar">
        <div className="container-fluid">
            <Logo />
        </div>
      </nav>    

      <nav className="navbar navbar-expand-md navbar-light">  
      <div className="cm">
          <div className="cmo"><Link to="/new">Create new User</Link></div>
          
       </div>
       </nav>

      </div>
    );
    }
  }
