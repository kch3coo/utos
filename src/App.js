import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import FirstComponent from './components/ExampleComponent'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello World</h1>
      <FirstComponent displaytext="Test Componenet"/>
      
    </div>
  );
}

export default App;
