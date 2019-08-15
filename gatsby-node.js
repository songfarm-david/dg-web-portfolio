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

   if (wp_result.errors) {
      console.log(result.errors)
      throw new Error("Things broke, see console output above")
   }

   const {
      allWordpressPage,
      allWordpressPost,
      allWordpressSiteMetadata
   } = wp_result.data

   // create WordPress Pages
   allWordpressPage.edges.forEach(({ node }) => {
      console.log('wp_id', node.wordpress_id)
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
      console.log('post title:', node.title)
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
}
