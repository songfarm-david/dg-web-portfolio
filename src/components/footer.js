// put mailing list component in here
// Simple subscribe function found in footer and on blog (near bottom?)
// Enter your email, subscribe, notification of success happens with an animation and then a note is written on the page in place of the subscribe box

import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
	<footer id="site-footer">
		<p>Visit me online:</p>
		<ul className="flex-list">
			{/*<li className="full-width"><FontAwesomeIcon fixedWidth size="1x" icon={faPhone} /><span>+1 (778) 587-9220</span></li>
			<li className="full-width"><FontAwesomeIcon fixedWidth size="1x" icon={faEnvelope} /><span>david@peakwebsites.ca</span></li>*/}
			<li><a href="https://stackoverflow.com/users/2909732/david-gaskin?tab=profile" target="_blank"><FontAwesomeIcon fixedWidth size="1x" icon={faStackOverflow} /></a></li>
			<li><a href="https://github.com/songfarm-david/" target="_blank"><FontAwesomeIcon fixedWidth size="1x" icon={faGithub} /></a></li>
            <li><a href="https://twitter.com/peakwebsite" target="_blank"><FontAwesomeIcon fixedWidth size="1x" icon={faTwitter} /></a></li>
		</ul>
		<small>© {new Date().getFullYear()}, Built with
		{` `}
		<a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a></small>
	</footer>
)

export default Footer
