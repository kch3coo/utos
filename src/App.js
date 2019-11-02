import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import About from "./About";
import User from "./User";
import Login from "./Login";

const routing = (
  <Router>
    <div>
      <Route path="/" component={Homepage} />
      <Route path="/user" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default routing;
