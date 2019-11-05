import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "../elements/Header/Header"
import Navigation from "../elements/Navigation/Navigation"
// import NotFound from "../elements/NotFound/NotFound"
import Home from "../Home/Home"
import Task from "../Task/Task"
import User from "../User/User"

class App extends Component {
  state = {
    users: [],
    tasks: [],
    selectedUser: "",
    selectedTask: ""
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Header />
            <Navigation />

            <Route path="/" exact component={Home} />
            <Route path="/users" component={User} />
            <Route path="/usersTasks/:userId" component={Task} />
            <Route path="/tasks" component={Task} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
