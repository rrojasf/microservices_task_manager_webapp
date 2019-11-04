import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import { API_USERS_URL } from "../../../config"

const User = props => (
  <tr>
    <td className="col">{props.user._id}</td>
    <td className="col">{props.user.name}</td>
    <td>
      <Link to={"/users/edit/" + props.user._id}>Edit</Link>
    </td>
  </tr>
)

export default class UserList extends Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount() {
    this._isMounted = true

    axios
      .get(API_USERS_URL)
      .then(response => {
        if (this._isMounted === true) {
          this.setState({ users: response.data })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  componentDidUpdate() {
    this._isMounted = true

    axios
      .get(API_USERS_URL)
      .then(response => {
        if (this._isMounted === true) {
          this.setState({ users: response.data })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  usersList() {
    return this.state.users.map(function(currentUser, i) {
      return <User user={currentUser} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h3>User List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </div>
    )
  }
}
