import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import "./TaskItem.css"

export class TaskItem extends Component {
  getStyle = () => {
    return {
      background: "#F4F4F4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    }
  }

  render() {
    const { _id, description, status, user_id } = this.props.task

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, _id)}
            checked={status === "done" ? "checked" : ""}
          />{" "}
          <span
            style={{
              textDecoration:
                this.props.task.status === "done" ? "line-through" : "none"
            }}
          >
            {description}
          </span>
          <span className="responsible">({user_id})</span>
          <button
            className="button-trash"
            onClick={this.props.deleteTask.bind(this, _id)}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </p>
      </div>
    )
  }
}

export default TaskItem
