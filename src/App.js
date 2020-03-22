import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Login, Admin } from './components/index'
import './App.css';

import { Jumbotron } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null,
    }

    this.setUser = this.setUser.bind(this)
  }

  setUser(user) {
    this.setState({
      user: user,
    })
  }

  render() {
    const { user } = this.state

    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3">Choose your topic</h1>
          <Router>

            <Switch>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <p className="lead">Choose a project topic by logging in and choosing from a randomly selected topic.</p>

                <Login setuser={this.setUser} user={user} />
              </Route>
            </Switch>
          </Router>


        </Jumbotron>
      </div>
    )
  }

}

export default App;
