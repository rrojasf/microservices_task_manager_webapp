import React, { Component } from "react"
import PropTypes from "prop-types"

import TaskItem from "../TaskItem/TaskItem"

class TaskList extends Component {
  tasksList() {
    const { tasks, deleteTask, markComplete } = this.props

    if (typeof this.props.tasks !== "undefined") {
      if (tasks.length > 0) {
        return tasks.map(function(currentTask, i) {
          return (
            <TaskItem
              task={currentTask}
              key={currentTask._id}
              deleteTask={deleteTask}
              markComplete={markComplete}
            />
          )
        })
      } else {
        return <div>No Items...</div>
      }
    } else {
      return <div>No Props...</div>
    }
  }

  render() {
    return (
      <div>
        <h3>Tasks List</h3>
        {this.tasksList()}
      </div>
    )
  }
}

// PropTypes
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskList
