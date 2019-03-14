import React from 'react';
import './App.css';
import MovieContainer from "./components/MovieContainer";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home"


class App extends React.Component {

  render() {
    return (
      <div>
      <NavBar />
      <Switch>
        <Route path="/movies" component={MovieContainer} />
        <Route exact path="/" component={Home} />
      </Switch>

      </div>
    );
  }
}

export default App;
