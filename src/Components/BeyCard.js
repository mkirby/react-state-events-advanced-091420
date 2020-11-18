import React from "react";

class BeyCard extends React.Component {

  state = {
    newBey: {
      "id": this.props.bey.id,
      "name": this.props.bey.name,
      "img": this.props.bey.img,
      "favorite": !this.props.bey.favorite
    }
  }
  
  handleFavorite = () => { 
    this.props.favoriteMeme(this.state.newBey)
  }

  render() {
    return (
    <div className="card" >
      <h2>{this.props.bey.name}</h2>
      <img src={this.props.bey.img} onClick={this.handleFavorite}/>
    </div>
  );
  }
};

export default BeyCard;