/**
 * Template for Project Posts
 */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default function ProjectTemplate({ data }) {
	console.log(data);
	const { title, meta, featured_media, content, taxonomies } = data.wordpressWpProjects
	let label = 'Technologies used: '
	return (
		<Layout className="">
			<h2>{title}</h2>
			<span>{meta.project_date}</span>
			<img src={featured_media.source_url} />
			<div dangerouslySetInnerHTML={{ __html: content}}/>
			<div>{
				taxonomies.map((tech, index) => {
					if (index == taxonomies.length-1) {
						return <span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: label + tech.name }} />
					}
					return (
						<span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: label + tech.name + ", " }} />
					)
				})
			}
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
			featured_media {
				source_url
			}
		}
	}
`
