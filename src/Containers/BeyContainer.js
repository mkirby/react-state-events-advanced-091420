import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBeyCards = () => {
    return this.props.cardArray.map(card => <BeyCard key={card.id} bey={card} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;