import React, { Component } from "react"
import axios from "axios"

import { API_USERS_URL } from "../../../config"

export default class UserCreate extends Component {
  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name: ""
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`Form submitted:`)
    console.log(`Name: ${this.state.name}`)

    const newUser = {
      name: this.state.name
    }

    axios.post(API_USERS_URL, newUser).then(res => console.log(res.data))

    this.setState({
      name: ""
    })
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}
