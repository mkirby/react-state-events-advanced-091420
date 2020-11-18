import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

  renderBeyCards = () => {
    return this.props.cardArray.map(card => <BeyCard key={card.id} bey={card} clickHandler={this.props.clickHandler}/>)
  }
  
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeyCards()}
      </div>
    );
  }
}
