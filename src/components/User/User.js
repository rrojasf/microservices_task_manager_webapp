import React, { Component } from "react"
import axios from "axios"

import UserAdd from "../elements/UserAdd/UserAdd"
import UserList from "../elements/UserList/UserList"

import { API_USERS_URL } from "../../config"

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false,
      editingUser: ""
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    this.fetchItems(API_USERS_URL)
  }

  render() {
    return (
      <div>
        <br />
        <React.Fragment>
          <UserAdd addUser={this.addUser} />
          <UserList
            users={this.state.users}
            deleteUser={this.deleteUser}
            editUser={this.editUser}
            showTasks={this.showTasks}
            editingUser={this.state.editingUser}
            editCancel={this.editCancel}
            updateUser={this.updateUser}
          />
        </React.Fragment>
      </div>
    )
  }

  /** Custom Methods */
  addUser = name => {
    axios
      .post(API_USERS_URL, {
        name
      })
      .then(res =>
        this.setState({
          users: [...this.state.users, res.data]
        })
      )
  }

  updateUser = (id, name) => {
    axios
      .put(API_USERS_URL + id, {
        name
      })
      .then(res =>
        this.setState({
          users: this.state.users.map(currentUser => {
            if (currentUser._id === id) {
              currentUser.name = res.data.name
            }

            return currentUser
          }),
          editingUser: ""
        })
      )
  }

  editUser = id => {
    console.log("editing", id)
    this.setState({ editingUser: id })
  }

  editCancel = () => {
    console.log("cancel-editing")
    this.setState({ editingUser: "" })
  }

  showTasks = id => {
    console.log("tasks for", id)

    this.props.history.push("/usersTasks/" + id)
  }

  // Delete Task
  deleteUser = id => {
    // check if user isBlocked

    axios.delete(API_USERS_URL + `${id}`).then(res =>
      this.setState({
        users: [...this.state.users.filter(user => user._id !== id)]
      })
    )
  }

  fetchItems(url) {
    axios
      .get(url)
      .then(response => {
        this.setState({ users: response.data, loading: false })
      })
      .catch(error => {
        console.log(error)
      })
  }

  /*componentWillUnmount() {
    this.setState({ loading: false})
  }*/
}
