import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPen, faCheck } from "@fortawesome/free-solid-svg-icons"

import "./TaskItem.css"

export class TaskItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _id: props.task._id,
      isChecked: props.task.status === "done" ? true : false
    }
  }

  getStyle = () => {
    return {
      background: "#F4F4F4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    }
  }

  onCheck = e => {
    let current = this.state.isChecked
    let now = !this.state.isChecked

    this.setState({ isChecked: now })

    console.log(
      "checked?",
      current,
      now,
      this.props.task.description,
      now ? "done" : "to-do"
    )

    this.props.completeTask(this.state._id, now ? "done" : "to-do")
  }

  render() {
    const { _id, description, status, user_id } = this.props.task

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.onCheck}
            checked={this.state.isChecked}
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
            className="button"
            onClick={this.props.deleteTask.bind(this, _id)}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className="button"
            onClick={this.props.editTask.bind(this, _id)}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            className="button"
            onClick={this.onCheck}
            style={{ float: "right" }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </p>
      </div>
    )
  }
}

export default TaskItem
