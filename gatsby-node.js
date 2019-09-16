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
         allWordpressPost {
         	edges {
         		node {
         			slug
         			title
         			wordpress_id
         			type
         			status
         			path
         			modified
         			format
         			excerpt
         			date
         			content
         		}
         	}
         }
         allWordpressSiteMetadata {
         	edges {
         		node {
         			description
         			home
         			name
         			url
         		}
         	}
         }
      }
   `)

   // const pk_custom_post_types = await graphql(`
   //    allWordpressWpPkProjects {
   //       edges {
   //          node {
   //             format
   //             link
   //             path
   //             slug
   //             status
   //             template
   //             title
   //             type
   //             wordpress_id
   //          }
   //       }
   //    }
   // `)

   if (wp_result.errors) {
      console.log("Things broke, see error below.")
      throw new Error(wp_result.errors)
   } else {
		console.log('this is my success', wp_result);
	}

   // const {
   //    allWordpressPage,
   //    allWordpressPost,
   //    allWordpressWpPkProjects,
   //    allWordpressSiteMetadata
   // } = wp_result.data

   const {
      allWordpressPage,
      allWordpressPost,
      allWordpressSiteMetadata
   } = wp_result.data

   console.log('log some types', wp_result.__type);

   // create WordPress Pages
   allWordpressPage.edges.forEach(({ node }) => {
      // console.log('status page', node.status)
      if (node.status == 'publish' && node.type == 'page') {
         createPage({
            path: node.slug,
            component: pageTemplate,
            context: {
               wp_id: node.wordpress_id,
               slug: node.slug,
               title: node.title,
               excerpt: node.excerpt
            }
         })
      }
   })

   allWordpressPost.edges.forEach(({ node }) => {
      // console.log('status post:', node.status)
      if (node.status == 'publish' && node.type == 'post') {
         createPage({
            path: node.slug,
            component: postTemplate,
            context: {
               wp_id: node.wordpress_id,
               slug: node.slug,
               title: node.title,
               excerpt: node.excerpt
            }
         })
      }
   })

   // if ( !allWordpressWpPkProjects ) {
   //    return;
   // }
   // allWordpressWpPkProjects.edges.forEach(({ node }) => {
   //    // console.log(node);
   // })

}
