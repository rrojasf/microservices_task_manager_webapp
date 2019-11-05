import React from "react"
import PropTypes from "prop-types"

import "./Home.css"

const homePropTypes = {
  className: PropTypes.string
}

const Home = ({ className }) => <div className={className}>Hello!</div>

Home.propTypes = homePropTypes

export default Home
