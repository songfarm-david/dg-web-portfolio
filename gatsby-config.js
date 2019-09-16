require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`
});

const mapCustomTaxToPostType = ({entities}) => {

   const wp_projects = entities.filter( e => e.__type === 'wordpress__wp_projects' )
   console.log(wp_projects)

   // const wp_taxonomies = entities.filter( e => e.__type === 'wordpress__wp_taxonomies' )
   // console.log(wp_taxonomies)

   // write array of possible REGULAR values so that they can be excluded from a filter array

   // extract last part of string from entities.__type if it matches 'wordpress__wp_'
   // store them in variables

   // get all custom taxonomies
   const custom_taxes = entities.filter( e => e.__type === 'wordpress__wp_tech' );

   return entities.map(e => {
      if (e.__type === `wordpress__wp_projects`) {
         let hasTax = e.tech && Array.isArray(e.tech) && e.tech.length
         // `e.{$custom_tax_name}`

         if (hasTax) {
            e.taxonomies___NODE = e.tech.map(
               l => custom_taxes.find(c => l === c.wordpress_id).id
            ) // taxonomy___NODE
            delete e.taxonomies
         }
      }
      return e
   })

   // NOTE: "__type: 'wordpress__wp_types'" returns things like 'post', 'page', 'attachment'
   // which kind is a custom post

   // NOTE: 'categories__NODE: [Array]' is associated to type: "post"

   // NOTE: (ref) 'wordpress__POST',
   // wordpress__POST also has:
   //    meta: [],
   //    tags: []

   // NOTE: (ref) 'wordpress_id: 2244' (ex.)
   // 'id' is hash. Ex: 2534e35b-e9e2-5838-a83c-de9b24e7e97b

   // NOTE: (ref) 'wordpress__CATEGORY',
   // has 'name' field
   // also has field "taxonomy___NODE: 'f30fb460-6da2-57cb-aa85-ffe021048ad0'"

   // Example:
   // { wordpress_id: 66,
   //     count: 0,
   //     description: 'Tags posts about 8BIT.',
   //     link: 'http://localhost/peak-theme/tag/8bit/',
   //     name: '8BIT',
   //     slug: '8bit',
   //     meta: [],
   //     _links: [Object],
   //     __type: 'wordpress__TAG',
   //     id: '7efa6b5d-00b5-5cf2-9291-18df76c50b04',
   //     taxonomy___NODE: '0918f518-6444-5e20-98d2-0a756e8aa09f',
   //     path: '/peak-theme/tag/8bit/' }

   // if (entities.__type === 'wordpress__wp_taxonomies') {
   //    console.log('HEYO');
   // }
   // return generateFakeWordpressId(entities)
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
         baseUrl: `localhost/peak-theme/`,
         protocol: `http`,
         hostingWPCOM: false,
         verboseOutput: true,
         useACF: false,
         excludedRoutes: [
            '**/redirection/*',
            '**/settings*',
            '**/themes*',
            '**/akismet/*',
            '**/users*',
            '**/media'
         ],
         normalizer: mapCustomTaxToPostType
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
