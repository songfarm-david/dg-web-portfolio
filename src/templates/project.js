/**
 * Template for Project Posts
 */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

/* helper function to decode HTML entities from WordPress feed */
import decodeHTML from '../functions/decode-html.js'

export default function ProjectTemplate({ data }) {
	const { title, meta, featured_media, content, taxonomies } = data.wordpressWpProjects
	let label = 'Technologies used: '
	return (
		<Layout>
			<section className="section">
				<h2>{decodeHTML(title)}</h2>
				<span>{meta.project_date}</span>
				<img src={(featured_media) ? featured_media.source_url : ""} alt="" />
				<div dangerouslySetInnerHTML={{ __html: content}}/>
				<div>{
					taxonomies.map((tech, index) => {
						if (index === taxonomies.length-1) {
							return <span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: label + tech.name }} />
						}
						return (
							<span key={index} className="project_tech" dangerouslySetInnerHTML={{ __html: label + tech.name + ", " }} />
						)
					})
				}
				</div>
			</section>
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
				alt_text
				description
			}
		}
	}
`
