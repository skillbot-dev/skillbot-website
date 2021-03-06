const path = require('path')
const { createFilePath } = require( `gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ graphql, actions: { createPage }}) => {
    const data = await graphql(
    `
        {
            allMarkdownRemark{
                edges{
                    node{
                        id
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)

    if(data.errors){
        console.log('Error in retrieving data', data.errors)
        return
    }

    // data.data.allServicesJson.edges.forEach(service => {
    //     createPage({
    //         path:  `/services/${service.node.slug}/`,
    //         component: require.resolve("./src/templates/ServiceTemplate.js"),
    //         context: {
    //             slug: service.node.slug
    //         }
    //     })
    // });

    data.data.allMarkdownRemark.edges.forEach(internship =>{
        createPage({
            path: `${internship.node.fields.slug}`,
            component: require.resolve("./src/templates/InternshipTemplate.js"),
            context: {
                id : internship.node.id
            }
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node);
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}