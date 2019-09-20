require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`
});

const mapTechToProjects = ({ entities }) => {

   // const wp_projects = entities.filter( e => e.__type === 'wordpress__wp_projects' )
   // console.log(wp_projects)

   // get all custom taxonomies
   const custom_taxes = entities.filter( e => e.__type === 'wordpress__wp_tech' );

   return entities.map(e => {
      if (e.__type === `wordpress__wp_projects`) {
         let hasTax = e.tech && Array.isArray(e.tech) && e.tech.length

         if (hasTax) {
            e.taxonomies___NODE = e.tech.map(
               l => custom_taxes.find(
                  c => l === c.wordpress_id
               ).id
            )
            delete e.taxonomies
         } else {
            // hacky fallback in case no "tags" are assigned to project
            e.taxonomies___NODE = e.tech.map(
               l => custom_taxes.indexOf(0).id
            );
         }
      }
      return e
   })

}

module.exports = {
   siteMetadata: {
       title: `Peakwebs 2019`,
       description: `Nothing yet ...`,
       author: `Mickey Mouse`,
       siteUrl: 'https://peakwebsites.ca'
    },
    plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
         baseUrl: `peakwebsites.ca/`,
         protocol: `http`,
         hostingWPCOM: false,
         verboseOutput: true,
         useACF: false,
         excludedRoutes: [
            '/redirection/**/*',
            '/settings/*',
            '/themes/*',
            '/akismet/**/*',
            '/users/*'
         ],
         normalizer: mapTechToProjects
         // auth: {
         //    jwt_user: process.env.JWT_USER,
         //    jwt_pass: process.env.JWT_PASS,
         //    jwt_base_path: "/jwt-auth/v1/token"
         // }
        //  ,
        //  includedRoutes: [
        //   "**/categories",
        //   "**/posts",
        //   "**/pages",
        //   // "**/media",
        //   "**/tags",
        //   "**/taxonomies",
        //   // "**/pk_projects/?status=*",
        //   // "**/posts/?status=*",
        //   "**/posts/**"
        // ]
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// adding rest support for custom taxonomies
// https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-rest-api-support-for-custom-content-types/
// https://wordpress.stackexchange.com/questions/258102/custom-post-type-api-doesnt-show-taxonomy-or-category-array
// https://codex.wordpress.org/Function_Reference/register_taxonomy
