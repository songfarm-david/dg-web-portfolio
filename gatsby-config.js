require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`
});

// function mapMoviesToGenres({ entities }) {
//    console.log('in the func', entities);
//    return entities.map(e => {
//       console.log(e.__type);
//       return e;
//    })
// }

// adding rest support for custom taxonomies
// https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-rest-api-support-for-custom-content-types/
// https://wordpress.stackexchange.com/questions/258102/custom-post-type-api-doesnt-show-taxonomy-or-category-array
// https://codex.wordpress.org/Function_Reference/register_taxonomy

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
         baseUrl: `peakwebsites.ca`,
         protocol: `https`,
         hostingWPCOM: false,
         verboseOutput: true,
         useACF: false,
         // excludedRoutes: [
         //    '**/redirection/*',
         //    '**/settings*',
         //    '**/themes*',
         //    '**/akismet/*',
         //    '**/users*'
         // ],
         auth: {
            jwt_user: process.env.JWT_USER,
            jwt_pass: process.env.JWT_PASS,
            jwt_base_path: "/jwt-auth/v1/token"
         }
         // ,
         // normalizer: mapMoviesToGenres
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
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
