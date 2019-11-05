import React, { Component } from "react"

import UserItem from "../UserItem/UserItem"
import UserEdit from "../UserEdit/UserEdit"

class UserList extends Component {
  usersList() {
    if (typeof this.props.users !== "undefined") {
      const {
        users,
        deleteUser,
        editUser,
        showTasks,
        editingUser,
        editCancel,
        updateUser
      } = this.props

      if (users.length > 0) {
        return users.map(function(currentUser, i) {
          if (editingUser === currentUser._id) {
            return (
              <UserEdit
                user={currentUser}
                key={currentUser._id}
                editCancel={editCancel}
                updateUser={updateUser}
              />
            )
          } else {
            return (
              <UserItem
                user={currentUser}
                key={currentUser._id}
                deleteUser={deleteUser}
                editUser={editUser}
                showTasks={showTasks}
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
        <h3>Users List</h3>
        {this.usersList()}
      </div>
    )
  }
}

export default UserList
