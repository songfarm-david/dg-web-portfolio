import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import decodeHTML from "../functions/decode-html.js"

export default ({ data }) => {
   return (
     <Layout>
       <SEO title="Portfolio Home" />

       <section id="recent-projects" className="section">
         <h2>Recent Projects</h2>
         <div className="projects-container">
         {
            data.allWordpressWpProjects.edges.map(( {node}, index ) => {
               console.log(node, index);
               return (
                  <>
                     <Link to={node.slug} className="project-container">
                        <div key={index}>
                           <h3 className="h4">{node.title}</h3>
                           <span>{node.meta.project_date}</span>
                           <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                           <p><Link to={node.slug} title={node.title}>Read more</Link></p>
                           <div className="tags-container">
                           {node.taxonomies.map((tech, index) => {
               					if (index == node.taxonomies.length-1) {
               						return <span key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name }} />
               					}
               					return (
               						<span key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name + ", " }} />
               					)
               				})}
                           </div>
                        </div>
                     </Link>
                  </>
               )
            })
         }
         </div>
       </section>

       <section id="skills" className="section">
         <h2>Skillsets</h2>
         {
            data.allWordpressWpSkills.edges.map(( {node}, index ) => {
               console.log(node);
               const { title, excerpt, slug } = node
               return (
                  <Link to={slug}>
                     <div key={index} className="skill-container">
                        <h4>{decodeHTML(title)}</h4>
                        <p dangerouslySetInnerHTML={{ __html: (excerpt) ? excerpt : null}} />
                     </div>
                  </Link>

               )
            })
         }

       </section>

       <section>
         <h3>Skills at a Glance</h3>
         <h4>Front-end</h4>
         <ul>
            <li>HTML/5 (7+ years)</li><li>CSS/3 (7+ years)</li>
         </ul>
         <h4>Back-end</h4>
         <h4>Databases</h4>
         <h4>DevOps</h4>
       </section>

       <article id="image-collage">
         <strong>Image collage here!</strong>
       </article>

       {/* image collage -- can I find an example? */}

       <section id="about-section">
         <h2>About</h2>
         <div id="about-content">
            {/*quote adjective*/}
            <p className="quote">Designer, Developer, Consultant, Webmaster, Thinker</p>
            {/*regular paragraph text*/}
            <p>I help SMBs take their business to the next level by offering expert support in the areas of web design & development, SEO, marketing for the web, and accessibility.</p>
            <p>At a glance: </p>
            <ul>
               <li>7+ years expertise developing for the web</li>
               <li>Canadian citizen</li>
               <li>Willing to relocate for the right opportunity</li>
            </ul>
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
      allWordpressWpSkills {
         edges {
            node {
               title
               excerpt
               slug
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
