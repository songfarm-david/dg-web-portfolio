import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({...props}) => (
  <header>
      <h1>
        <Link to="/">
          {props.name}
        </Link>
      </h1>
  </header>
)

export default Header
