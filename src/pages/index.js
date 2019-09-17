import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import decodeHTML from "../functions/decode-html.js"

export default ({ data }) => {
   // NOTE: add class name to body tag here
   console.log('hello data', data);
   return (
     <Layout className="">
       <SEO title="Portfolio Home" />

       <section id="recent-projects" className="section">
         <h2>Recent Projects</h2>
         <div className="container">
         {
            data.allWordpressWpProjects.edges.map(( {node}, index ) => {
               console.log(node, index);
               return (
                  <>
                     <div key={index}>
                        <h3>{node.title}</h3>
                        <span>{node.meta.project_date}</span>
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        <p><Link to={node.slug} title={node.title}>Read more</Link></p>
                        <div className="tags-container">
                        {node.taxonomies.map((tech, index) => {
            					if (index == node.taxonomies.length-1) {
            						return <span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: tech.name }} />
            					}
            					return (
            						<span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: tech.name + ", " }} />
            					)
            				})}
                        </div>
                     </div>
                  </>
               )
            })
         }
         </div>
       </section>

       <section id="skills" className="section">
         <h2>Skillsets</h2>

         <h3>WordPress and Content Management Systems</h3>
         <h3>React (Gatsby)</h3>
         <aside>
            <h3>Build tools</h3>
         </aside>
         <h3>SEO</h3>{/*add markup title for 'search engine optimization'*/}
         <h3>Web Accessibility</h3>
         <h3>Blogging, Copywriting, Marketing</h3>
       </section>

       {/* image collage -- can I find an example? */}

       <section id="about-section" className="section">
         <h2>About</h2>
         <div id="about-content">
            {/*quote adjective*/}
            <p className="quote">Designer, Developer, Consultant, Webmaster, Thinker</p>
            {/*regular paragraph text*/}
            <p>I help SMBs take their business to the next level by offering expert support in the areas of web design & development, SEO, marketing for the web, and accessibility.</p>
         </div>
       </section>

       <section id="support">
         <h2>Contact</h2>
         <p>Need help with a project? Call for a free consultation.</p>
       </section>

       <article id="mailing-list">
         <h3>Stay in touch!</h3>{/* find example page somewhere? */}
         <p>Sign up for the Peak mailing list and receive insightful and fresh content for SMBs about trends on the web, in SEO, and online marketing.</p>
       </article>

     </Layout>
   )
}

export const query = graphql`
   query {
      wordpressSiteMetadata {
         name
         description
         url
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
               excerpt
               taxonomies {
                  name
               }
            }
         }
      }
   }
`

// allWordpressPage {
//    edges {
//       node {
//          title
//          status
//          excerpt
//          slug
//          type
//          wordpress_id
//          id
//       }
//    }
// }
// allWordpressPost {
//    edges {
//       node {
//          slug
//          title
//          wordpress_id
//          type
//          status
//          path
//          modified
//          format
//          excerpt
//          date
//          content
//       }
//    }
// }
// allWordpressWpPkProjects {
//    edges {
//       node {
//          title
//       }
//    }
// }
