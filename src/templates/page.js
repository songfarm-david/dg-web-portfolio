/**
 * Template for WordPress Pages
 */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

/* helper function to decode HTML entities from WordPress feed */
import decodeHTML from '../functions/decode-html.js'

export default function PageTemplate({ data }) {
	console.log('page data is', data);
	const { title, content } = data.wordpressPage
	return (
		<Layout>
			<section className="section">
				<h1>{decodeHTML(title)}</h1>
				<div dangerouslySetInnerHTML={{ __html: (content) ? content : null}} />
			</section>
		</Layout>
	)
}

export const pageQuery = graphql`
	query wp_page($wp_id: Int!) {
		wordpressPage(wordpress_id: { eq: $wp_id}) {
			title
			path
			slug
			wordpress_id
  		}
	}
`
