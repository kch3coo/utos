import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./components/Homepage";
import About from "./components/About";
import User from "./components/User";
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Homepage} exact/>
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
          </Switch>
        </div> 
      </BrowserRouter>
    )
  }
}