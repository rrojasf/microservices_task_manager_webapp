import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListAlt } from "@fortawesome/free-solid-svg-icons"

import "./Header.css"

const headerPropTypes = {
  className: PropTypes.string
}

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
      <nav className="navbar">
        <span className="header__span navbar-brand">
          <FontAwesomeIcon
            className="d-inline-block"
            icon={faListAlt}
            size="lg"
            alt="List emoji"
          />
        </span>
        <Link to="/" className="header__span">
          Tasks Todo App
        </Link>
      </nav>
    </div>
  </div>
)

Header.propTypes = headerPropTypes

export default Header
