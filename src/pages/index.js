import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
   // console.log(data);
   return (
     <Layout className="super-duper-body-tag">
       <SEO title="Home" />
     </Layout>
   )
}

export const query = graphql`
   query {
      allWordpressPage {
         edges {
            node {
               title
               status
               excerpt
               slug
               type
               wordpress_id
               id
            }
         }
      }
      allWordpressPost {
         edges {
            node {
               slug
               title
               wordpress_id
               type
               status
               path
               modified
               format
               excerpt
               date
               content
            }
         }
      }
      allWordpressSiteMetadata {
         edges {
            node {
               description
               home
               name
               url
            }
         }
      }
   }
`
