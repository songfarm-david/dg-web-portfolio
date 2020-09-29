/*
 * Main Index Page
 *
 * Sept. 2019
 * Author: Dave Gaskin
 */

import React from "react"
import { graphql, Link } from "gatsby"

import '../style/sections/sections.scss'

import decodeHTML from "../functions/decode-html.js"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
   faPhone,
   faEnvelope,
   faLink
} from '@fortawesome/free-solid-svg-icons'

export default ({ data }) => {
   return (
     <Layout className="index-page">

       <SEO
         title="David Gaskin - Portfolio Home"
         />

       <section id="about" className="banner">
          <div className="section">
             <h2 className="screen-reader-only">About</h2>
             <p>Hi, I'm Dave. I'm 35 yrs old and currently live in Victoria, British Columbia.</p>
             <p>I'm a self-directed, self-taught front-end/full-stack developer with experience building performant, modular, and agile websites and web applications.</p>
             <p>Some of my strengths include my attention to detail and commitment to a high standard of excellence.</p>
             <p>Please read on to learn more about my abilities and experience.</p>
          </div>
       </section>

       <section id="projects" className="section">
         <h2>Recent Projects</h2>
         <div className="section-container flex-parent">
         {
            data.allWordpressWpProjects.edges.map(({ node }, index ) => {
                console.log(node.meta.site_url === "")
               return (
                  <>
                     <div key={index} className="project section-item flex-item">
                        <h3 className="heading h4">{node.title}</h3>
                        <small className="date">{node.meta.project_date}</small>

                        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} className="main-description"/>

                        {node.meta.site_url !== "" && 
                        (<a href={node.meta.site_url} title="Go to site URL" className="project-link">
                           <FontAwesomeIcon fixedWidth size="1x" icon={faLink} />
                        </a>)}
                        <a href={node.meta.github_repo} title="See Github Repo" className="project-link">
                           <FontAwesomeIcon fixedWidth size="1x" icon={faGithub} />
                        </a>

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
                        <Link to={node.slug} className="read-more-link" title={node.title}>Read more</Link>
                     </div>
                  </>
               )
            })
         }
         </div>
       </section>

       <section id="skillsets" className="section">
         <h2>Skillsets</h2>
         <div className="section-container flex-parent">
         {
            data.allWordpressWpSkills.edges.map(( {node}, index ) => {
               const { title, excerpt, slug } = node
               return (
                  <article key={index} className="section-item flex-item">
                     <h4 className="heading">{decodeHTML(title)}</h4>
                     <div className="main-description" dangerouslySetInnerHTML={{ __html: (excerpt) ? excerpt : null}} />
                     <Link to={slug} className="read-more-link" title="Read more">Read more</Link>
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
                  <li>HTML/5 <small>(8 yrs)</small></li>
                  <li>CSS/3 <small>(8 yrs)</small></li>
                  <li>SASS/LESS <small>(7 yrs)</small></li>
                  <li>JavaScript/JavaScript ES6 <small>(8 yrs)</small></li>
                  <li>JSON <small>(7 yrs)</small></li>
                  {/* <li>jQuery <small>(7 yrs)</small></li> */}
                  <li>PHP <small>(7 yrs)</small></li>
               </ul>
            </div>
            <div className="flex-item section-item">
               <h4>Frameworks</h4>
               <ul>
                  <li>WordPress REST API <small>(4 yr)</small></li>
                  <li>ReactJS <small>(4 yrs)</small></li>
                  <li>GatsbyJS <small>(3 yrs)</small></li>
                  {/* <li>Webpack <small>(2 yrs)</small></li> */}
                  <li>Node.js/NPM <small>(3 yrs)</small></li>
                  <li>Git <small>(6 yrs)</small></li>
                  <li>Bootstrap <small>(3 yrs)</small></li>
               </ul>
            </div>
            <div className="flex-item section-item">
               <h4>Databases</h4>
               <ul>
                  <li>GraphQL <small>(3 yr)</small></li>
                  <li>IndexedDB <small>(1 yrs)</small></li>
                  <li>LocalStorage <small>(2 yrs)</small></li>
                  <li>MySQL/PHPMyAdmin <small>(6 yrs)</small></li>
               </ul>
            </div>
            <div className="flex-item section-item">
               <h4>Methodologies</h4>
               <ul>
                  <li>REST APIs <small>(3 yrs)</small></li>
                  <li>Modular Design <small>(3 yrs)</small></li>
                  <li>WAI-ARIA (Web Accessibility) <small>(4 yrs)</small></li>
                  <li>Object-Oriented Programming <small>(2 yrs)</small></li>
                  <li>Responsive Design <small>(7 yrs)</small></li>
               </ul>
            </div>
         </div>
       </section>

       <section className="banner">
         <div className="section">
            <h2 className="heading">Contact Me</h2>
            <div className="cta-container">
            <a href="tel:+17785879220" title="Call me" className="button">
               <FontAwesomeIcon fixedWidth size="1x" icon={faPhone} />&nbsp;+1 (778) 587-9220
            </a>
            <a href="mailto:david@peakwebsites.ca" title="Email me" className="button">
               <FontAwesomeIcon fixedWidth size="1x" icon={faEnvelope} />&nbsp;Email me
            </a>
            </div>
         </div>
       </section>

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
                  site_url
                  github_repo
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
