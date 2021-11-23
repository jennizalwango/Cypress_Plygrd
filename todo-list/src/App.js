import React, { useState } from "react";
import {BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Home from "./Home";
//components
import Login from "./LoginForm";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className={App}>
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/Dashboard">Dashboard</NavLink>
          </div>

        </div>
        <div className="content">
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
