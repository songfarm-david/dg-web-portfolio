/**
 * Implement Gatsby's Node APIs in this file.
 *
 * You can delete this file if you're not using it
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
   const { createPage } = actions

   const pageTemplate = path.resolve('src/templates/page.js')
   const postTemplate = path.resolve('src/templates/post.js')
   const projectTemplate = path.resolve('src/templates/project.js')

   const wp_result = await graphql(`
      {
         allWordpressPage {
            edges {
               node {
                  title
                  status
                  excerpt
                  slug
                  type
                  wordpress_id
                  id
               }
            }
         }
      }
   `)

   if (wp_result.errors) {
      console.log('this is my error', result.errors)
      throw new Error("Things broke, see console output above")
   } else {
		console.log('this is my success', wp_result);
	}

   // const {
   //    allWordpressPage,
   //    allWordpressPost,
   //    allWordpressWpPkProjects,
   //    allWordpressSiteMetadata
   // } = wp_result.data

   // create WordPress Pages
   // allWordpressPage.edges.forEach(({ node }) => {
   //    console.log('status page', node.status)
   //    if (node.status == 'publish' && node.type == 'page') {
   //       createPage({
   //          path: node.slug,
   //          component: pageTemplate,
   //          context: {
   //             wp_id: node.wordpress_id,
   //             slug: node.slug,
   //             title: node.title,
   //             excerpt: node.excerpt
   //          }
   //       })
   //    }
   // })

   // allWordpressPost.edges.forEach(({ node }) => {
   //    // console.log('status post:', node.status)
   //    if (node.status == 'publish' && node.type == 'post') {
   //       createPage({
   //          path: node.slug,
   //          component: postTemplate,
   //          context: {
   //             wp_id: node.wordpress_id,
   //             slug: node.slug,
   //             title: node.title,
   //             excerpt: node.excerpt
   //          }
   //       })
   //    }
   // })

   // allWordpressWpPkProjects.edges.forEach(({ node }) => {
   //    console.log(node);
   // })

}

// allWordpressPost {
// 	edges {
// 		node {
// 			slug
// 			title
// 			wordpress_id
// 			type
// 			status
// 			path
// 			modified
// 			format
// 			excerpt
// 			date
// 			content
// 		}
// 	}
// }
// allWordpressWpPkProjects {
// 	edges {
// 		node {
// 			format
// 			link
// 			path
// 			slug
// 			status
// 			template
// 			title
// 			type
// 			wordpress_id
// 		}
// 	}
// }
// allWordpressSiteMetadata {
// 	edges {
// 		node {
// 			description
// 			home
// 			name
// 			url
// 		}
// 	}
// }
