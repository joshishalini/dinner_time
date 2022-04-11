import React, { Component } from 'react'
import axios from "axios";
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes(){
    axios.get("/recipes/get_recipes")
    .then((response) => {
      this.setState({ recipes: response.data.recipes});
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <div>
        <section className="card-header text-center">
          <h1>Its Dinner Time!</h1>
        </section>
        <section className="m-5">
          <p>Find recipes according to your ingredents in your fridge.</p>
        </section>
        <section>

        </section>
        <section>
          <div className="row m-5">
           { this.state.recipes.map((recipe, index) => (
              <Card key={index} className="col-md-3 mt-3">
                <Card.Img variant="top" classLink="card-img-top img-fluid" src={recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>
                    Author: {recipe.author}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                {
                  recipe.ingredients.split("|").map((ingredient, index_for_ingredient) => (
                  <ListGroup.Item key={index_for_ingredient}>{ingredient}</ListGroup.Item>
                  ))
                }
                </ListGroup>
                <Card.Body>
                  <Card.Link href={`/recipe/${recipe.id}`}>More Info</Card.Link>
                </Card.Body>
              </Card>
                ))}
          </div>
        </section>
      </div>
    )
  }
}