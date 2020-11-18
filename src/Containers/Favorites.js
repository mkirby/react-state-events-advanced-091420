import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

  renderBeyCards = () => {
    return this.props.array.map(card => <BeyCard key={card.id} bey={card} favoriteMeme={this.props.favoriteMeme}/>)
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
