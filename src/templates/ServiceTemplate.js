import React from 'react'
import Layout from '../components/layout/Layout'

export const query = graphql`
    query( $slug: String! ) {
        servicesJson(slug: { eq: $slug }){
            slug
            title
            features
        }
    }
`

const ServiceTemplate = ({data}) =>{
    const service = data.servicesJson;
    return(
        <Layout>
            <h1>{service.title}</h1>
        </Layout>
    );  
}

export default ServiceTemplate