import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import decodeHTML from "../functions/decode-html.js"

import '../style/sections/projects.scss'

export default ({ data }) => {
   return (
     <Layout>
       <SEO title="Portfolio Home" />

       <section id="about" className="section" hidden>
          <div className="">
             <h2 className="">About</h2>
             <p>Full-stack developer of 7 years with solid experience in web development, UI/UX, and web accessibility with a desire to learn and master React, responsive design, modular design, and optimal user experience.</p>
             <p>Capable web designer of 7+ years with solid experience in full-stack development, ..., ...</p>
             <p>Get in touch with by <a href="mailto:david@peakwebsites.ca" title="">email</a>, or visit me online:</p>
             <p className="about__social-link"><span className="screen-reader-only">Github</span></p>
             <p className="about__social-link"><span className="screen-reader-only">Stack Overflow</span></p>
             <p className="about__social-link"><span className="screen-reader-only">Twitter</span></p>
          </div>
       </section>

       <section id="projects" className="section" hidden>
         <h2>Recent Projects</h2>
         <div className="section-container flex-parent">
         {
            data.allWordpressWpProjects.edges.map(({ node }, index ) => {
               return (
                  <>
                     <div key={index} className="section-item flex-item">
                        <h3 className="heading h4">{node.title}</h3>
                        <small className="date">{node.meta.project_date}</small>
                        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} className="main-description"/>

                        <div className="sub-section">
                        {node.taxonomies.map((tech, index) => {
            					if (index === node.taxonomies.length-1) {
            						return <small key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name }} />
            					}
            					return (
            						<small key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name + ", " }} />
            					)
            				})}
                        </div>
                        <p className="cta read-more-link"><Link to={node.slug} title={node.title}>Read more</Link></p>
                     </div>
                  </>
               )
            })
         }
         </div>
       </section>

       <section id="skillsets" className="section" hidden>
         <h2>Skillsets</h2>
         <div className="section-container flex-parent">
         {
            data.allWordpressWpSkills.edges.map(( {node}, index ) => {
               const { title, excerpt } = node
               return (
                  <article key={index} className="section-item flex-item">
                     <h4 className="heading">{decodeHTML(title)}</h4>
                     <div className="main-description" dangerouslySetInnerHTML={{ __html: (excerpt) ? excerpt : null}} />
                  </article>
               )
            })
         }
         </div>
       </section>

       <section id="skills" className="section">
         <h2>Skills at a Glance</h2>
         <div className="section-container flex-parent">
            <div className="flex-item section-item">
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
            <div className="flex-item section-item">
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
            <div className="flex-item section-item">
               <h4>Databases</h4>
               <ul>
                  <li>GraphQL <small>(1 yr)</small></li>
                  <li>IndexedDB <small>(2 yrs)</small></li>
                  <li>LocalStorage <small>(2 yrs)</small></li>
                  <li>MySQL/PHPMyAdmin <small>(5 yrs)</small></li>
               </ul>
            </div>
            <div className="flex-item section-item">
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
