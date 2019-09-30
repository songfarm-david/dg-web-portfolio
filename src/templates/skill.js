/**
 * Template for WordPress Skills
 */
import React from "react"
import { graphql, Link } from "gatsby"

/* helper function to decode HTML entities from WordPress feed */
import decodeHTML from '../functions/decode-html.js'

import Layout from "../components/layout"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function PageTemplate({ data }) {
	console.log('page data is', data);
	const { title, content } = data.wordpressWpSkills
	return (
		<Layout className="skill-page">

			<div className="banner home-link">
				<div className="section">
					<Link to="/" title="Home"><FontAwesomeIcon fixedWidth size="1x" icon={faHome} />Home</Link>
				</div>
			</div>

			<section className="section">
				<h1>{decodeHTML(title)}</h1>
				<div dangerouslySetInnerHTML={{ __html: (content) ? content : null}} />
			</section>

			<div className="section">
				<Link to="/" title="Home">Go back</Link>
			</div>

		</Layout>
	)
}

export const skillQuery = graphql`
	query wp_skill($wp_id: Int!) {
		wordpressWpSkills(wordpress_id: { eq: $wp_id}) {
    		wordpress_id
    		title
    		path
    		slug
    		excerpt
    		content
  		}
	}
`
