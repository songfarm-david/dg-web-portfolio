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
   const skillTemplate = path.resolve('src/templates/skill.js')

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
         allWordpressWpProjects {
            edges {
               node {
                  wordpress_id
                  title
                  meta {
                     project_date
                  }
                  slug
                  status
                  type
                  featured_media {
                     source_url
                     alt_text
                     caption
                     description
                  }
               }
            }
         }
         allWordpressWpSkills {
            edges {
               node {
                  title
                  path
                  slug
                  excerpt
                  content
                  wordpress_id
                  status
                  type
               }
            }
         }
      }
   `)

   if (wp_result.errors) {
      console.log("Things broke, see error below.")
      throw new Error(wp_result.errors)
   }

   const {
      allWordpressPage,
      allWordpressPost,
      allWordpressSiteMetadata,
      allWordpressWpProjects,
      allWordpressWpSkills
   } = wp_result.data

   // create WordPress Pages and Posts
   allWordpressPage.edges.forEach(({ node }) => {
      console.log('status page', node.slug)
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

   // create pages for Projects
   allWordpressWpProjects.edges.forEach(({ node }) => {
      // console.log(node);
      if (node.status == 'publish' && node.type == 'projects') {
         createPage({
            path: node.slug,
            component: projectTemplate,
            context: {
               wp_id: node.wordpress_id,
               slug: node.slug,
               title: node.title,
               content: node.content,
               featured_media: node.featured_media
            }
         })
      } else {
         throw new Error('Boom goes the dynamite')
      }
   })
   allWordpressWpSkills.edges.forEach(({ node}) => {
      // console.log(node);
      if (node.status == 'publish' && node.type == 'skills') {
         createPage({
            path: node.slug,
            component: skillTemplate,
            context: {
               wp_id: node.wordpress_id,
               slug: node.slug,
               title: node.title,
               content: node.content
            }
         })
      } else {
         throw new Error('Boom goes the dynamite')
      }
   })
}
