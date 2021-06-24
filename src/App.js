import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import React, { Component } from "react";
import Board from "./Board";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class App extends Component {
  state = {
    id: 0,
    username: "",
    password: "",
    scores: [],
  };

  setUser = (user) => {
    this.setState({
      id: user.id,
      username: user.username,
      scores: user.scores,
    });
    this.props.history.push("/board");
  };

  setNewUser = (user) => {
    this.setState({
      id: user.id,
      username: user.username,
      scores: user.scores,
    });
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login setUser={this.setUser} />
            <Link to="/signup">Sign Up</Link>
          </Route>
          <Route exact path="/board">
            <Board />
          </Route>
          <Route exact path="/signup">
            <SignUp setUser={this.setNewUser}/>
            <Link to="/login">Log in</Link>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
