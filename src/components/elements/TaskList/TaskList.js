import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import { API_TASKS_URL } from "../../../config"

const Task = props => (
  <tr>
    <td className={props.task.status ? "done" : ""}>
      {props.task.description}
    </td>
    <td className={props.task.status ? "done" : ""}>{props.task.user_id}</td>
    <td>
      <Link to={"/tasks/edit/" + props.task._id}>Edit</Link>
    </td>
  </tr>
)

export default class TasksList extends Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = { tasks: [] }
  }

  componentDidMount() {
    this._isMounted = true

    axios
      .get(API_TASKS_URL)
      .then(response => {
        if (this._isMounted) {
          this.setState({ tasks: response.data })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  componentDidUpdate() {
    this._isMounted = true

    axios
      .get(API_TASKS_URL)
      .then(response => {
        if (this._isMounted === true) {
          this.setState({ tasks: response.data })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  tasksList() {
    return this.state.tasks.map(function(currentTask, i) {
      return <Task task={currentTask} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h3>Tasks List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.tasksList()}</tbody>
        </table>
      </div>
    )
  }
}
