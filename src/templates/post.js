/**
 * Template for WordPress Posts
 */
 import React from "react"
 import { graphql } from "gatsby"
 import Layout from "../components/layout"

 /* helper function to decode HTML entities from WordPress feed */
 import decodeHTML from '../functions/decode-html.js'

export default function PostTemplate({ data }) {
	console.log('post data is', data);
	const { title, content } = data.wordpressPost
	return (
		<section className="section">
			<h1>{decodeHTML(title)}</h1>
			<div dangerouslySetInnerHTML={{ __html: (content) ? content : null}} />
		</section>
	)
}

export const pageQuery = graphql`
	query wp_post($wp_id: Int!) {
		wordpressPost(wordpress_id: { eq: $wp_id}) {
			title
			date
			modified
			excerpt
			path
			type
			wordpress_id
			comment_status
			slug
			status
		}
	}
`
