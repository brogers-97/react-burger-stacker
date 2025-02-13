import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import "./App.css"



export default class App extends Component{

  state = {
    burger: []
  }

  handleClearBurger = () => {
    this.setState({
      burger: []
    })
    console.log(this.state)
  }

  handleAddIngredient = (item) => {
    this.setState({
      burger: [...this.state.burger, item]
    })
    console.log(this.state)
  }

  render() {
    return(
      <div>
        
        <div className='ingredient-list'>
          <IngredientList handleAddIngredient={this.handleAddIngredient}/>
        </div>

        <div className='burger-pane'>
          <BurgerPane 
          handleClearBurger={this.handleClearBurger}
          burger={this.state.burger}
          />
        </div>

      </div>
    )
  }
}
