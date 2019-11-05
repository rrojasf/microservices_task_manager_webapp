import React, { Component } from "react"
import axios from "axios"

import TaskAdd from "../elements/TaskAdd/TaskAdd"
import TaskList from "../elements/TaskList/TaskList"

import { API_TASKS_URL, API_USERS_URL } from "../../config"

export default class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      loading: false,
      editingTask: "",
      userId:
        typeof props.match.params.userId !== "undefined"
          ? props.match.params.userId
          : "",
      user: {},
      header: ""
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    let tasksUrl = API_TASKS_URL

    if (this.state.userId !== "") {
      tasksUrl = API_TASKS_URL + "user/" + this.state.userId
    }

    this.fetchItems(tasksUrl, this.state.userId)
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
            editingTask={this.state.editingTask}
            editCancel={this.editCancel}
            updateTask={this.updateTask}
            completeTask={this.completeTask}
            header={this.state.header}
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
        status: "to-do",
        user_id: this.state.userId
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

  fetchItems(url, userId) {
    axios
      .get(url)
      .then(response => {
        this.setState({ tasks: response.data, loading: false })

        return axios.get(API_USERS_URL + userId)
      })
      .then(res => {
        this.setState({
          user: res.data[0],
          header: this.state.userId !== "" ? "(" + res.data[0].name + ")" : ""
        })
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

  completeTask = (id, status) => {
    console.log("completing", id)

    axios
      .put(API_TASKS_URL + id, {
        status
      })
      .then(res =>
        this.setState({
          tasks: this.state.tasks.map(currentTask => {
            if (currentTask._id === id) {
              currentTask.status = res.data.status
            }

            return currentTask
          })
        })
      )
  }

  updateTask = (id, description) => {
    axios
      .put(API_TASKS_URL + id, {
        description
      })
      .then(res =>
        this.setState({
          tasks: this.state.tasks.map(currentTask => {
            if (currentTask._id === id) {
              currentTask.description = res.data.description
            }

            return currentTask
          }),
          editingTask: ""
        })
      )
  }

  editTask = id => {
    console.log("editing", id)
    this.setState({ editingTask: id })
  }

  editCancel = () => {
    console.log("cancel-editing")
    this.setState({ editingTask: "" })
  }
}
