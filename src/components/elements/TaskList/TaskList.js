import React, { Component } from "react"
import PropTypes from "prop-types"

import TaskItem from "../TaskItem/TaskItem"
import TaskEdit from "../TaskEdit/TaskEdit"

class TaskList extends Component {
  tasksList() {
    const {
      tasks,
      deleteTask,
      markComplete,
      editTask,
      editingTask,
      editCancel,
      updateTask,
      completeTask,
      header
    } = this.props

    if (typeof this.props.tasks !== "undefined") {
      if (tasks.length > 0) {
        return tasks.map(function(currentTask, i) {
          if (editingTask === currentTask._id) {
            return (
              <TaskEdit
                task={currentTask}
                key={currentTask._id}
                editCancel={editCancel}
                updateTask={updateTask}
              />
            )
          } else {
            return (
              <TaskItem
                task={currentTask}
                key={currentTask._id}
                deleteTask={deleteTask}
                markComplete={markComplete}
                editTask={editTask}
                editingTask={editingTask}
                editCancel={editCancel}
                completeTask={completeTask}
              />
            )
          }
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
        <h3>Tasks List {this.props.header}</h3>
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
