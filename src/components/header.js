import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <header id="site-header" className="flex-header">
      <div className="flex-header-item">
         <h1 className="h2">David Gaskin - Full-stack developer</h1>
      </div>
      <div className="flex-header-item contact-container">
         <a href="tel:+17785879220" title="Call me" className="contact-item">+1 (778) 587-9220</a>
         <a href="mailto:david@peakwebsites.ca" title="Email me" className="contact-item"><FontAwesomeIcon fixedWidth size="1x" icon={faEnvelope} /></a>
      </div>
  </header>
)

export default Header
