import React, { Component } from "react"
import axios from "axios"

import TaskAdd from "../elements/TaskAdd/TaskAdd"
import TaskList from "../elements/TaskList/TaskList"

import { API_TASKS_URL } from "../../config"

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [], loading: false }
  }

  componentDidMount() {
    this.setState({ loading: true })

    let tasksUrl = API_TASKS_URL

    if (typeof this.props.match.params.userId !== "undefined") {
      tasksUrl = API_TASKS_URL + "user/" + this.props.match.params.userId
    }

    this.fetchItems(tasksUrl)
  }

  /*componentDidUpdate() {
    let tasksUrl = API_TASKS_URL

    if (typeof this.props.match.params.userId !== "undefined") {
      tasksUrl = API_TASKS_URL + "user/" + this.props.match.params.userId
    }

    this.fetchItems(tasksUrl)
  } */

  render() {
    return (
      <div>
        <br />
        <React.Fragment>
          <TaskAdd addTask={this.addTask} />
          <TaskList
            tasks={this.state.tasks}
            markComplete={this.markComplete}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
          />
        </React.Fragment>
      </div>
    )
  }

  /** Custom Methods */
  addTask = description => {
    axios
      .post(API_TASKS_URL, {
        description: description,
        status: "to-do"
      })
      .then(res =>
        this.setState({
          tasks: [...this.state.tasks, res.data]
        })
      )
  }

  // Delete Task
  deleteTask = id => {
    axios.delete(API_TASKS_URL + `${id}`).then(res =>
      this.setState({
        tasks: [...this.state.tasks.filter(task => task._id !== id)]
      })
    )
  }

  fetchItems(url) {
    axios
      .get(url)
      .then(response => {
        this.setState({ tasks: response.data, loading: false })
      })
      .catch(error => {
        console.log(error)
      })
  }

  /*componentWillUnmount() {
    this.setState({ loading: false})
  }*/

  // Toggle Complete
  markComplete = id => {
    console.log("selected", id)

    /*this.setState({
      tasks: this.state.tasks.map(currentTask => {
        if (currentTask._id === id) {
          if (currentTask.status === "to-do") currentTask.status = "done"
          if (currentTask.status === "done") currentTask.status = "to-do"

        }

        return currentTask
      })
    })*/
  }
}
