// /**
//  * Template for WordPress Posts
//  */
// import React from "react"
// import { graphql } from "gatsby"
//
// /* helper function to decode HTML entities from WordPress feed */
// // import decodeHTMLEntities from '../js/utils/decodeHTMLEntities.js'
//
// export default function PostTemplate({ data }) {
// 	console.log('post data is', data);
// 	return (
//       <div dangerouslySetInnerHTML={{ __html: data.title}} />
// 	)
// }
//
// export const pageQuery = graphql`
// 	query wp_post($wp_id: Int!) {
// 		wordpressPost(wordpress_id: { eq: $wp_id}) {
// 			title
// 			date
// 			modified
// 			excerpt
// 			path
// 			type
// 			wordpress_id
// 			comment_status
// 			slug
// 			status
// 		}
// 	}
// `
