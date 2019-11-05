import React, { Component } from "react"

class TaskAdd extends Component {
  state = {
    description: ""
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.description)
    this.setState({ description: "" })
  }

  onChange = e => this.setState({ description: e.target.value })

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="description"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Task..."
          value={this.state.description}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    )
  }
}

export default TaskAdd
