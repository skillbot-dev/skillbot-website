exports.createPages = async ({ graphql, actions: { createPage }}) => {
    const data = await graphql(
    `
        {
            allInternshipsJson {
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)

    if(data.errors){
        console.log('Error in retrieving data', data.errors)
        return
    }

    data.data.allInternshipsJson.edges.forEach(internship => {
        createPage({
            path:  `/internships/${internship.node.slug}/`,
            component: require.resolve("./src/templates/InternshipTemplate.js"),
            context: {
                slug: internship.node.slug
            }
        })
    });
}