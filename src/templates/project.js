/**
 * Template for Project posts
 */
import React from "react"
import { graphql } from "gatsby"

export default function ProjectTemplate({ data }) {
	console.log('post data is', data);
	return (
      <div dangerouslySetInnerHTML={{ __html: data.title}} />
	)
}

// export const projectQuery = graphql`
//
// `
