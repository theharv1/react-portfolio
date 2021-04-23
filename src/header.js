import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './home';
import Projects from './projects';

const Header = () => {
    return (
        <>
        <Router>
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/" >Portfolio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects" >Projects</Link>
                </li>
                </ul>
            </div>
            </nav>

            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
        </>
    );
}

export default Header;