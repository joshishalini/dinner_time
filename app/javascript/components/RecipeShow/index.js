import React, { Component } from 'react'
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";


export default class RecipeShow extends Component {

  render() {
    return(
      <div>
        <section className="card-header text-center">
          <h1>Its Dinner Time!</h1>
        </section>
      </div>
    )
  }
}


