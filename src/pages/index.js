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
       <SEO title="Home" />
       <h1>{data.wordpressSiteMetadata.name}</h1>

       <section id="about-section" className="section">
         <h2>About</h2>
         <div id="about-content">
            {/*quote adjective*/}
            <p className="quote">Designer, Developer, Consultant, Webmaster, Thinker</p>
            {/*regular paragraph text*/}
            <p>I help SMBs take their business to the next level by offering expert support in the areas of web design & development, SEO, marketing for the web, and accessibility.</p>
         </div>
       </section>

       <section id="recent-projects" className="section">
         <h2>Recent Projects</h2>
         <div className="project">
            <h3>KetoCounter.me</h3>
            {/* KetoCounter image here */}
            <div className="project-links">
            </div>
            <p className="description">As a Progressive Web App in the health and fitness sphere, KetoCounter combines many modern build processes including asset bundling, modular components, user authentication and more to create a seamless and engaging user experience.</p>
            <h4>Project highlights:</h4>
            <ul>
               <li>Highlight 1</li>
               <li>Highlight 2</li>
               <li>Highlight 3</li>
               <li>Highlight 4</li>
               <li>Highlight 5</li>
            </ul>
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

       <section id="support">
         <h2>Contact</h2>
         <p>Need help with a project? Call for a free consultation.</p>
       </section>

       <article id="mailing-list">
         <h3>Stay in touch!</h3>{/* find example page somewhere? */}
         <p>Sign up for the Peak mailing list and receive insightful and fresh content for SMBs about trends on the web, in SEO, and online marketing.</p>
       </article>

       <section>
         <h3>Pages</h3>
         {/*data.allWordpressWpPkProjects.edges.map(({ node }, index) => (
           <div key={index}>
            <h3>
               <Link to={node.slug} state={{ post: node }}>
                  {decodeHTML(node.title)}
               </Link>
            </h3>
               <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
               <Link to={node.slug} state={{ post: node }}>Read more</Link>
           </div>
        ))*/}
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
