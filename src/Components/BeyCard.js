import React from "react";

class BeyCard extends React.Component {

  cardClickHandler = () => { 
    this.props.clickHandler(this.props.bey.id)
  }

  render() {
    return (
    <div className="card" >
      <h2>{this.props.bey.name}</h2>
      <img src={this.props.bey.img} onClick={this.cardClickHandler}/>
    </div>
  );
  }
};

export default BeyCard;