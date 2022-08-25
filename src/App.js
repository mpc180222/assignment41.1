import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import NavBar from "./NavBar"
import Chocolate from "./Chocolate";
import Skittles from "./Skittles";
import Spinach from "./Spinach";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
    
      <Route exact path = "/"><Home /></Route>
      <Route exact path = "/chocolate"><Chocolate /></Route>
      <Route exact path = "/spinach"><Spinach /></Route>
      <Route exact path = "/skittles"><Skittles /></Route>
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
