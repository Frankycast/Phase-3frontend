import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import React, { Component } from "react";
import MemoryApp from "./MemoryApp";
import ScoresContainer from "./ScoresContainer"
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
    } );
    this.props.history.push("/memoryapp");

  };

  // componentDidMount(){
  // fetch("http://localhost:9393/users")
  // .then((r) => r.json())
  // .then((usersArray) => {
  //   this.setState({
  //     usersInfo: usersArray
  //   })
  // });
  // }


  render() {
    console.log(this.state.scores)

    return (
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login setUser={this.setUser} />
            <Link to="/signup">Sign Up</Link>
          </Route>
          <Route exact path="/signup">
            <SignUp setUser={this.setUser}/>
            <Link to="/login">Log in</Link>
          </Route>
          <Route exact path="/memoryapp">
            <MemoryApp />
            <ScoresContainer scores={this.state.scores}/> 
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);