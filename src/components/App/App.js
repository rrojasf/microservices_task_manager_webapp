import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

// import "bootstrap/dist/css/bootstrap.min.css"

import Header from "../elements/Header/Header"
import Navigation from "../elements/Navigation/Navigation"
//import NotFound from "../elements/NotFound/NotFound"
import Home from "../Home/Home"
import TaskList from "../elements/TaskList/TaskList"
import UserList from "../elements/UserList/UserList"
import UserEdit from "../elements/UserEdit/UserEdit"
import UserCreate from "../elements/UserCreate/UserCreate"

//import TaskCreate from "../TaskCreate/TaskCreate"
//import TaskEdit from "../Home/Home"
//            <Route path="/users/edit/:id" component={UserEdit} />
//            <Route path="/tasks/edit/:id" component={TaskEdit} />
//

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Header />
            <Navigation />

            <Route path="/" exact component={Home} />
            <Route path="/users" component={UserList} />
            <Route path="/users/create" component={UserCreate} />
            <Route path="/users/edit/:id" component={UserEdit} />
            <Route path="/users/tasks/:id" component={TaskList} />
            <Route path="/tasks" component={TaskList} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
