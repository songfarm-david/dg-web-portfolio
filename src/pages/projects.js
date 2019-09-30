/*
 * Index page for Projects
 */
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
	console.log(data.allWordpressWpProjects);
	return (
		<Layout className="">
			<SEO title="Projects" />
			<section>
           <h3>Pages</h3>
           {data.allWordpressWpProjects.edges.map(({ node }, index) => (
             <div key={index}>
              <h3>
                 <Link to={node.slug} state={{ post: node }}>
                    {node.title}
                 </Link>
              </h3>
                 <div dangerouslySetInnerHTML={{ __html: node.content }} />
                 <Link to={node.slug} state={{ post: node }}>Read more</Link>
             </div>
          ))}
         </section>
		</Layout>
	)
}

export const query = graphql`
	query {
		allWordpressWpProjects {
			edges {
				node {
					title
					meta {
						project_date
					}
					slug
				}
			}
		}
	}
`
