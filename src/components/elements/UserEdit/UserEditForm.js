import React, { Component } from "react"
import axios from "axios"

import { API_USERS_URL } from "../../../config"

export default class UserEdit extends Component {
  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    axios
      .get(API_USERS_URL + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const obj = {
      name: this.state.name
    }
    axios
      .put(API_USERS_URL + this.props.match.params.id, obj)
      .then(res => console.log(res.data))

    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <h3>Update User</h3>
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

          <br />
          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
