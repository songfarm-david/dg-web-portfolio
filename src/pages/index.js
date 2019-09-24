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
                     {/*<Link to={node.slug} className="project-container">*/}
                        <div key={index} className="project-container">
                           <h3 className="h4 project-title">{node.title}</h3>
                           <small className="project-date">{node.meta.project_date}</small>
                           <div dangerouslySetInnerHTML={{ __html: node.excerpt }} className="project-excerpt"/>
                           <p className="read-more-link"><Link to={node.slug} title={node.title}>Read more</Link></p>
                           <div className="tech-container">
                           {node.taxonomies.map((tech, index) => {
               					if (index === node.taxonomies.length-1) {
               						return <small key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name }} />
               					}
               					return (
               						<small key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name + ", " }} />
               					)
               				})}
                           </div>
                        </div>
                     {/*</Link>*/}
                  </>
               )
            })
         }
         </div>
       </section>

       <section id="skillsets" className="section">
         <h2>Skillsets</h2>
         <div className="flex-parent">
         {
            data.allWordpressWpSkills.edges.map(( {node}, index ) => {
               console.log(node);
               const { title, excerpt, slug } = node
               return (
                  <article key={index} className="skill">
                     <h4>{decodeHTML(title)}</h4>
                     <div dangerouslySetInnerHTML={{ __html: (excerpt) ? excerpt : null}} />
                  </article>
               )
            })
         }
         </div>
       </section>

       <section id="skills" className="section">
         <h2>Skills at a Glance</h2>
         <div className="flex-parent">
            <div className="flex-item">
               <h4>Languages</h4>
               <ul>
                  <li>HTML/5 <small>(7 yrs)</small></li>
                  <li>CSS/3 <small>(7 yrs)</small></li>
                  <li>JavaScript/JavaScript ES6 <small>(7 yrs)</small></li>
                  <li>JSON <small>(6 yrs)</small></li>
                  <li>jQuery <small>(7 yrs)</small></li>
                  <li>PHP <small>(7 yrs)</small></li>
                  <li>SASS/LESS <small>(5 yrs)</small></li>
               </ul>
            </div>
            <div className="flex-item">
               <h4>Frameworks</h4>
               <ul>
                  <li>WordPress REST API <small>(1 yr)</small></li>
                  <li>ReactJS <small>(2 yrs)</small></li>
                  <li>GatsbyJS <small>(2 yrs)</small></li>
                  <li>Webpack <small>(2 yrs)</small></li>
                  <li>Node.js/NPM <small>(4 yrs)</small></li>
                  <li>Git <small>(5 yrs)</small></li>
                  <li>Bootstrap <small>(5 yrs)</small></li>
               </ul>
            </div>
            <div className="flex-item">
               <h4>Databases</h4>
               <ul>
                  <li>GraphQL <small>(1 yr)</small></li>
                  <li>IndexedDB <small>(2 yrs)</small></li>
                  <li>LocalStorage <small>(2 yrs)</small></li>
                  <li>MySQL/PHPMyAdmin <small>(5 yrs)</small></li>
               </ul>
            </div>
            <div className="flex-item">
               <h4>Methodologies</h4>
               <ul>
                  <li>REST APIs <small>(3 yrs)</small></li>
                  <li>Modular Design <small>(3 yrs)</small></li>
                  <li>WAI-ARIA (Web Accessibility) <small>(5 yrs)</small></li>
                  <li>Object-Oriented Programming <small>(5 yrs)</small></li>
                  <li>Responsive Design <small>(6 yrs)</small></li>
               </ul>
            </div>
         </div>
       </section>

       <article id="image-collage"></article>


      <section id="about" className="">
         <div className="section">
            <h2>About</h2>
            <p>Full-stack developer with 7+ years of strong experience in web development, UI/UX, and web accessibility with a desire to learn and master responsive design and optimal user experience. Excellent communication skills and attention to detail.</p>
            <div>
               <h3>Get in touch</h3>
               <p>Call or email me, or visit my profiles online:</p>
               <div></div>
            </div>
         </div>
      </section>

         {/*<div className="article-container">

            <article id="support" className="">
              <h2>Contact</h2>
              <p>Need help with a project? Call for a free consultation.</p>
            </article>

            <article id="subscribe" className="">
              <h3>Stay in touch!</h3>
              <p>Sign up for the Peak mailing list and receive insightful and fresh content for SMBs about trends on the web, in SEO, and online marketing.</p>
            </article>

         </div>*/}

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
      allWordpressWpProjects(sort: {fields: date, order: DESC}) {
         edges {
            node {
               wordpress_id
               date
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
