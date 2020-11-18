import React from "react";
import "./App.css";
// import Favorites from "./Containers/Favorites";
import BeyContainer from "./Containers/BeyContainer";
import beyArray from './api.js'


class App extends React.Component {
  state = {
      index: beyArray,
      favorites: []
    }

  favoriteMeme = (beyObj) => {
    let newIndex
    let newFavorites
    if (beyObj.favorite) {
      newIndex = [...this.state.index].filter(obj => obj.id !== beyObj.id)
      newFavorites = [...this.state.favorites, beyObj]
    } else {
      newIndex = [...this.state.index, beyObj]
      newFavorites = [...this.state.favorites].filter(obj => obj.id !== beyObj.id)
    }
    this.setState({index: newIndex, favorites: newFavorites})
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer class="index" title="Index" array={this.state.index} favoriteMeme={this.favoriteMeme}/>
        <BeyContainer class="favorites" title="Favorites" array={this.state.favorites} favoriteMeme={this.favoriteMeme}/>
        {/* <Favorites array={this.state.favorites} favoriteMeme={this.favoriteMeme}/> */}
      </div>
    );
  }
};

export default App;