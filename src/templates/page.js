/**
 * Template for WordPress Pages
 */
import React from "react"
import { graphql } from "gatsby"

/* helper function to decode HTML entities from WordPress feed */
import decodeHTMLEntities from '../js/utils/decodeHTMLEntities.js'

export default function Page({ data }) {
	// const { wp_page } = data
	console.log('hootspa', data);
	return (
		<div>{data}</div>
	)
}

export const pageQuery = graphql`
	query wp_page($wp_id: Int!) {
		wordpressPage(wordpress_id: { eq: $wp_id}) {
			title
  		}
	}
`
