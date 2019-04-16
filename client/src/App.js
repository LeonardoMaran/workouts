import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./components/Body";
import About from "./pages/About";
import Workout from "./pages/Workout";
import Error from "./pages/Error";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    currentPage: "Home"
  };

  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Body>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/workout" component={Workout} />
          <Route component={Error} />
        </Switch>
        </Body>
        </div>
        </Router>
    );
  }
}

export default App;