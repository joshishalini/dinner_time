import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../components/Home"

// Css and js Import
import '../../assets/stylesheets/application.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}
export default App;
