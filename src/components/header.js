import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { config } from '@fortawesome/fontawesome-svg-core'
// config.autoAddCss = false

const Header = ({...props}) => (
  <header id="site-header">
      <h1 className="h2">David Gaskin</h1>
      <ul>
         <li><FontAwesomeIcon fixedWidth size="1x" icon={faGithub} /></li>
         <li><FontAwesomeIcon fixedWidth size="1x" icon={faTwitter} /></li>
         <li><FontAwesomeIcon fixedWidth size="1x" icon={faPhone} /></li>
         <li><FontAwesomeIcon fixedWidth size="1x" icon={faEnvelope} /></li>
      </ul>
  </header>
)

export default Header
