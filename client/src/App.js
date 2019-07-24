import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Index";
import Index from "./components/pages/Index";
import New from "./components/pages/New";
import Edit from "./components/pages/Edit";
import Delete from "./components/pages/Delete";
import "./App.css";


class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/new" component={New} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/delete/:id" component={Delete} />
            </Switch>
          </div>
        </Router>
    );
  }
}
export default App;
