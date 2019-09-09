// /**
//  * Template for WordPress Pages
//  */
// import React from "react"
// import { graphql } from "gatsby"
//
// /* helper function to decode HTML entities from WordPress feed */
// // import decodeHTMLEntities from '../js/utils/decodeHTMLEntities.js'
//
// export default function PageTemplate({ data }) {
// 	console.log('page data is', data);
// 	return (
//       <div dangerouslySetInnerHTML={{ __html: data.title}} />
// 	)
// }
//
// export const pageQuery = graphql`
// 	query wp_page($wp_id: Int!) {
// 		wordpressPage(wordpress_id: { eq: $wp_id}) {
// 			title
// 			path
// 			slug
// 			wordpress_id
//   		}
// 	}
// `
