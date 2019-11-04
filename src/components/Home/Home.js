import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListAlt } from "@fortawesome/free-solid-svg-icons"

import "./Home.css"

const homePropTypes = {
  className: PropTypes.string
}

const Home = ({ className }) => <div className={className}>Hello!</div>

Home.propTypes = homePropTypes

export default Home
