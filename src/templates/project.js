/*
 * Page for showing all projects
 *
 * Sept. 2019
 * Author: Dave Gaskin
 */
import React from "react"
import { graphql, Link } from "gatsby"

import '../style/projects/projects.scss'
/* helper function to decode HTML entities from WordPress feed */
import decodeHTML from '../functions/decode-html.js'

import Layout from "../components/layout.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function ProjectTemplate({ data }) {

	// returns HTML for project image, if it exists
	const isFeaturedMedia = (featured_media) => {
		if (!featured_media) return
		return (
			<img className="featured-image" src={featured_media.source_url} alt={featured_media.alt_text} />
		)
	}

	const {
		title,
		meta,
		featured_media,
		content,
		taxonomies } = data.wordpressWpProjects

	return (
		<Layout className="project-page">

			<div className="banner home-link">
				<div className="section">
					<Link to="/" title="Home"><FontAwesomeIcon fixedWidth size="1x" icon={faHome} />Home</Link>
				</div>
			</div>

			<section className="section">
				<h2>{decodeHTML(title)}</h2>
				<span className="date">{meta.project_date}</span>
				{isFeaturedMedia(featured_media)}
				<div className="project-content" dangerouslySetInnerHTML={{ __html: content}}/>
				<div className="project-tech-container sub-section">{
					taxonomies.map((tech, index) => {
						if (index === taxonomies.length-1) {
							return <span key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name }} />
						}
						return (
							<span key={index} className="project-tech" dangerouslySetInnerHTML={{ __html: tech.name + ", " }} />
						)
					})
				}
				</div>
			</section>

			<div className="section">
				<Link to="/" title="Home">Go back</Link>
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
				site_url
				github_repo
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
