import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faList, faPen } from "@fortawesome/free-solid-svg-icons"

import "./UserItem.css"

export class UserItem extends Component {
  getStyle = () => {
    return {
      background: "#F4F4F4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    }
  }

  render() {
    const { _id, name } = this.props.user

    return (
      <div style={this.getStyle()}>
        <p>
          {name}
          <button
            className="button"
            onClick={this.props.deleteUser.bind(this, _id)}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className="button"
            onClick={this.props.showTasks.bind(this, _id)}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
          <button
            className="button"
            onClick={this.props.editUser.bind(this, _id)}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
        </p>
      </div>
    )
  }
}

export default UserItem
