import { Link } from "gatsby"
import React from "react"

const Header = ({...props}) => (
  <header id="site-header">
      <h1>Portfolio</h1>
      <ul>
         <li>Github</li>
         <li>Twitter</li>
         <li>Phone</li>
         <li>Email</li>
      </ul>
  </header>
)

export default Header
