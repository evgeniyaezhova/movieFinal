import React from 'react';
// import './App.css';
// import HomeContainer from "./components/HomeContainer";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


class App extends React.Component {

  render() {
    return (
      <div>
      <NavBar />
      <h1>WELCOME TO MY MOVIE APP</h1>

      </div>
    );
  }
}

export default App;



// <Switch>
// <Route exact path="/" component={HomeContainer} />
// </Switch>
