/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../style/global.scss"

import Header from "./header"

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
   const { name, description } = data.wordpressSiteMetadata
   console.dir(data.wordpressSiteMetadata);
   return (
     <>
        <div id="bodyTag" className={props.className}>
           {/*<Header name={name}/>*/}
           <main>
              {/*<p>{description}</p>*/}
              {props.children}
           </main>

           {/*<Footer slug={props.slug} />*/}
           <footer>
             © {new Date().getFullYear()}, Built with
             {` `}
             <a href="https://www.gatsbyjs.org">Gatsby</a>
           </footer>

           {/*<Modal path={path}/>*/}
        </div>
     </>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
