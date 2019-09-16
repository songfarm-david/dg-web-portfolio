/**
 * Template for Project Posts
 */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default function ProjectTemplate({ data }) {
	console.log(data);
	const postData = data.wordpressWpProjects
	return (
		<Layout className="">
			<h2>{postData.title}</h2>
			<span>{postData.meta.project_date}</span>
			<div dangerouslySetInnerHTML={{ __html: postData.content}}/>
			<div>
				{postData.taxonomies.map((tech, index) => {
					if (index == postData.taxonomies.length-1) {
						return <span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: tech.name }} />
					}
					return (
						<span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: tech.name + ", " }} />
					)
				})}
			</div>
		</Layout>

	)
}

export const pageQuery = graphql`
	query wp_project($wp_id: Int!) {
		wordpressWpProjects(wordpress_id: { eq: $wp_id}) {
			title
			meta {
				project_date
			}
			content
			taxonomies {
				name
			}
		}
	}
`
