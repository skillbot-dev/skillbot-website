import React from 'react';
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from "../components/layout/Layout"
import Button from "../components/Button"
export const query = graphql`
    query( $slug: String! ) {
        internshipsJson(slug: { eq: $slug }){
            title
            sponsoredBy
            content
            startDate
            duration
            registrationFee
            registrationLink
            image{
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

const InternshipTemplate = ({ data }) => {
    const internship = data.internshipsJson
    return (
        <Layout>
            <section className="pt-10 md:pt-20 pb-20 md:pb-20">
                <div className="container mx-auto px-8 lg:flex">
                    <div className="lg:mt-12 text-center lg:text-left lg:w-1/2">
                        <h1 className="text-6xl lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
                            {internship.title}
                        </h1>     
                        <p className="font-montserrat text-3xl lg:text-4xl mt-6 font-light">
                            {internship.content}
                        </p>
                        <p className="mt-6 text-gray-600 font-montserrat">Get started with internships.</p>
                        <p className="mt-2 md:mt-6 text-xl font-bold font-raleway">
                            <Button className="rounded-full" size="lg" toPage={internship.registrationLink}>Register Now</Button>
                        </p>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-6 lg:w-1/2">
                        <Image fluid={internship.image.childImageSharp.fluid} />
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default InternshipTemplate;