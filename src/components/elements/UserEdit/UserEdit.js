import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"

import "./UserEdit.css"
class UserEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _id: props.user._id,
      name: props.user.name
    }
  }
  useEffect = () => {
    window.addEventListener("keyup", this.handleKeyUp)

    return () => {
      window.removeEventListener("keyup", this.handleKeyUp)
    }
  }

  handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === "Escape") {
      this.onCancel(ev)
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.updateUser(this.state._id, this.state.name)
    this.setState({ _id: "", name: "" })
  }

  onChange = e => this.setState({ name: e.target.value })

  onCancel = e => {
    this.props.editCancel(this)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }} method="POST">
        <input
          type="text"
          name="name"
          style={{ flex: "10", padding: "5px" }}
          placeholder={this.props.user.name}
          onChange={this.onChange}
        />
        <button
          data-testid="form-edit-submit-button"
          type="submit"
          id="submit-edit-todo-item"
          className="btn btn-primary form_edit__button--first"
          style={{ flex: "1" }}
          disabled={this.props.user.name === this.state.name ? true : false}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          data-testid="form-edit-cancel-edit-button"
          id="cancel-edit-todo-item"
          type="button"
          className="btn btn-danger"
          style={{ flex: "1" }}
          onClick={this.onCancel}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </form>
    )
  }
}

export default UserEdit
