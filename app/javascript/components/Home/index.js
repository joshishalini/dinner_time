import React, { Component } from 'react'
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      recipes: [],
      ingredients: [],
      input: ''
    };
    this.addIngredient = this.addIngredient.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);
  }

  componentDidMount() {
    this.loadRecipes();
  }

  handleIngredientChange(e) {
    this.setState({ input: e.target.value });
  }

  addIngredient(){
    this.state.ingredients.push(this.state.input)
    this.setState({ input: '' });
  }

  loadRecipes(){
    axios.get("/api/recipes")
    .then((response) => {
      this.setState({ recipes: response.data.recipes});
    })
    .catch(error => {
      console.log(error)
    })
  }

  searchRecipes(){
    var ingredients;
    if(this.state.ingredients.length > 0){
      ingredients = this.state.ingredients
    }else{
      ingredients = this.state.input
    }

    if(ingredients){
      axios.get(`/api/recipes?ingredients=${ingredients}`)
      .then((response) => {
        this.setState({ recipes: response.data.recipes});
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  removeIngredient = (ingredient) => {
    let filteredArray = this.state.ingredients.filter(item => item !== ingredient)
    this.setState({ingredients: filteredArray}); 
  }


  render() {
    return(
      <div>
        <section className="card-header text-center">
          <h1>Its Dinner Time!</h1>
        </section>
        <section className="m-5">
          <p>Find recipes according to your ingredient in your fridge.</p>
          {
            this.state.ingredients.map((ingredient, index)=> (
              <Button key={index} onClick={() => this.removeIngredient(ingredient)} variant="primary" className="ms-2">
                {ingredient} <Badge bg="danger">X</Badge>
              </Button>
              ))
          }
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingredient</Form.Label>
              <Form.Control type="ingredient" value={this.state.input} placeholder="Enter ingredient" onChange={ this.handleIngredientChange }  />
              <Button onClick={this.addIngredient} variant="primary" className="mt-2">
                Add
              </Button>
            </Form.Group>
            
            <Button onClick={this.searchRecipes} variant="primary">
              Search
            </Button>
          </Form>
        </section>
        <section>
          <div className="row m-5">
           { this.state.recipes.map((recipe, index) => (
              <Card key={index} className="col-md-3 mt-3">
                <Card.Img variant="top" className="card-img-top img-fluid" src={recipe.image} />
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


