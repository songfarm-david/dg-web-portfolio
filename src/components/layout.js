/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../style/styles.scss"

import Header from "./header"
import Footer from './footer'

const Layout = (props) => {
   const data = useStaticQuery(graphql`
      query SiteMetaQuery {
         wordpressSiteMetadata {
           home
           name
           description
         }
      }
   `)
   const { name } = data.wordpressSiteMetadata
   return (
     <>
        <div className={ props.className }>
           <Header name={ name }/>

           <main>
              {props.children}
           </main>

           <Footer />
        </div>
     </>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
