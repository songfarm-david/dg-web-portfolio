import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

import decodeHTML from "../functions/decode-html.js"

import '../style/sections/projects.scss'

export default ({ data }) => {
   return (
     <Layout>
       <SEO title="Portfolio Home" />

       <section id="about" className="banner">
          <div className="section">
             <h2 className="screen-reader-only">About</h2>
             <p>Hi, I'm David (but you can call me Dave).</p>
             <p>I'm a creative problem-solver and full stack developer with a knack for application development, UX, and growth optimization.</p>
             {/*<p>I'm looking for new, exciting opportunities to help make an impact.</p>*/}
             <p>Take a look around and get in touch with me if you think I might be able to help with your vision.</p>

             {/*<p>I'm kind of an introvert. People fascinate me. I like to draw, cook, work out, and play guitar.</p>*/}
             {/*<p>I'm excited to take on new projects and responsibilities and am looking to find an employer who takes risks and has a vision for a better tomorrow.</p>
             <p>If you think we might be a match, then please get in touch with by phone at or email me directly.</p>
             <p>Thanks for visiting!</p>*/}
             {/*<p>I'm a reliable and competent full-stack developer whose excited to work for an employer who isn't afraid to take risks and has a vision for a better tomorrow.</p>
             <p>I'm comfortable with most modern build tools, front-end languages, and frameworks, and when I don't know a language directly, I find I'm pretty good at picking it up!</p>
             <p>I'm also knowledgeable on the importance of good user-experience and accessibility, and skilled with responsive web design.</p>
             <p>I'm looking for fruitful partnerships (read: employment) with those who aren't afraid to take risks and have a vision for a better world. Is that too much to ask? (coy)</p>
             <p>If you think we'd be a good fit then please get in touch with by phone at or email me directly.</p>
             <p>Thanks for visiting!</p>*/}

             {/*<p>Hi, I'm David. I'm a creatfull-stack developer with over 7 years experience developing web applications.<p>
             <p>I believe in doing honest work and
             I believe in working with integrity and solving problems with creativity.

             <p>If you think I'm a match for your what you have in mind, then please contact me directly by phone at <a href="tel:+17785879220">1-778-587-9220</a> or by email</p>

             <p>Full-stack developer of 7 years with solid experience in web development, UI/UX, and web accessibility with a desire to learn and master React, responsive design, modular design, and optimal user experience.</p>
             <p>Capable web designer of 7+ years with solid experience in full-stack development, ..., ...</p>
             <p>Get in touch with by <a href="mailto:david@peakwebsites.ca" title="">email</a>, or visit me online:</p>
             <p className="about__social-link"><span className="screen-reader-only">Github</span></p>
             <p className="about__social-link"><span className="screen-reader-only">Stack Overflow</span></p>
             <p className="about__social-link"><span className="screen-reader-only">Twitter</span></p>*/}
          </div>
       </section>

       <section id="projects" className="section">
         <h2>Recent Projects</h2>
         <div className="section-container flex-parent">
         {
            data.allWordpressWpProjects.edges.map(({ node }, index ) => {
               console.log(node);
               return (
                  <>
                     <div key={index} className="section-item flex-item">
                        <h3 className="heading h4">{node.title}</h3>
                        <small className="date">{node.meta.project_date}</small>

                        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} className="main-description"/>

                        <a href={node.meta.site_url} title="Go to site URL" className="project-link">
                           <FontAwesomeIcon fixedWidth size="1x" icon={faLink} />
                        </a>
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
                        <p className="cta read-more-link"><Link to={node.slug} title={node.title}>Read more</Link></p>
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

       <section className="banner banner-small">
         <div className="section">
            <h2 className="heading">I'm looking for a fit</h2>
            <p>I'm exciting to be part of a team that is open-minded and forward-thinking employer.</p>
            <p>I'm available for 20-25 hours a week to start and prefer to work mostly remotely.</p>
            <p>Get in touch with me if you think I can help with your vision.</p>
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

       {/*<article id="image-collage"></article>*/}




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
