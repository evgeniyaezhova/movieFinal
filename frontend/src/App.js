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
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={MovieContainer} />
      </Switch>

      </div>
    );
  }
}

export default App;
