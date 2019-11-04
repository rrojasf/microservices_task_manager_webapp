import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListAlt } from "@fortawesome/free-solid-svg-icons"

import "./Navigation.css"

const navigationPropTypes = {
  className: PropTypes.string
}

const Navigation = ({ className }) => (
  <div className={className}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collpase nav-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/users/create" className="nav-link">
              Create User
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/tasks" className="nav-link">
              Tasks
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/tasks/create" className="nav-link">
              Create Task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

Navigation.propTypes = navigationPropTypes

export default Navigation
