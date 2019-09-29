/**
 * Template for WordPress Skills
 */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

/* helper function to decode HTML entities from WordPress feed */
import decodeHTML from '../functions/decode-html.js'

export default function PageTemplate({ data }) {
	console.log('page data is', data);
	const { title, content } = data.wordpressWpSkills
	return (
		<Layout>
			<section className="section">
				<h1>{decodeHTML(title)}</h1>
				<div dangerouslySetInnerHTML={{ __html: (content) ? content : null}} />
			</section>
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
