// NOTE: This page is a good example of a finalized page/section of the site. Review it's Layout className and SEO component format. Then delete this note! 09/29/2019

/*
 * Page for showing all projects
 * Sept. 2019
 *
 * Author: Dave Gaskin
 */

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
	// console.log(data.allWordpressWpProjects);
	return (
		<Layout className="all-projects-page">

			<SEO
				title="All Projects"
				/>

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
