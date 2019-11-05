import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";

export default class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello World</h1>
      </div>
    )
  }
}
