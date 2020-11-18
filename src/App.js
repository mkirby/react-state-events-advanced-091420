import React from "react";
import "./App.css";
import Favorites from "./Containers/Favorites";
import BeyContainer from "./Containers/BeyContainer";
import beyArray from './api.js'

class App extends React.Component {
  state = { api: beyArray }

  addToFavorites = (id) => {
    let newArray = [...this.state.api]
    let favObj = newArray.find(obj => obj.id === id)
    favObj.favorite = true
    this.setState({api: newArray})
  }

  removeFromFavorites = (id) => {
    let newArray = [...this.state.api]
    let favObj = newArray.find(obj => obj.id === id)
    favObj.favorite = false
    this.setState({api: newArray})
  }

  findFavorites = () => {
    return [...this.state.api].filter(obj => obj.favorite)
  }

  findNotFavorites = () => {
    return [...this.state.api].filter(obj => obj.favorite === false)
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer cardArray={this.findNotFavorites()} clickHandler={this.addToFavorites}/>
        <Favorites cardArray={this.findFavorites()} clickHandler={this.removeFromFavorites}/>
      </div>
    );
  }
};

export default App;