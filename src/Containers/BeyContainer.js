import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBeyCards = () => {
    return this.props.array.map(card => <BeyCard key={card.id} bey={card} favoriteMeme={this.props.favoriteMeme}/>)
  }

  render() {
    return (
      <div className={this.props.class}>
        <h1>{this.props.title}</h1>
        {this.renderBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;