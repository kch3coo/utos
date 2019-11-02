import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import About from './About'
import Recommended from './Recommended'
import Login from './Login'

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/Recommended" component={Recommended} />
            <Route path="/Login" component={Login} />
            <Route path="/About" component={About} />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Recommended">Recommended</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

