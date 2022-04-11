import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../components/Home"
import RecipeShow from "../components/RecipeShow"

// Css and js Import
import '../../assets/stylesheets/application.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipe/:id" element={<RecipeShow />} />
        </Routes>
      </div>
    );
  }
}
export default App;
