import { Link } from "gatsby"
import React from "react"

const Header = ({...props}) => (
  <header>
      <h1>
        <Link to="/">
          {props.name}
        </Link>
      </h1>
      <nav>
         <ul>
            <li><Link to="/" className="">Home</Link></li>
            <li><Link to="/projects" className="">Projects</Link></li>
         </ul>
      </nav>
  </header>
)

export default Header
