import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

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
            <Link to="/tasks" className="nav-link">
              All Tasks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

Navigation.propTypes = navigationPropTypes

export default Navigation
