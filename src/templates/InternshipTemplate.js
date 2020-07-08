import React from 'react';
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from "../components/layout/Layout"
import Card from "../components/Card"
export const query = graphql`
    query( $slug: String! ) {
        internshipsJson(slug: { eq: $slug }){
            title
            sponsoredBy
            startDate
            duration
            registrationFee
            registrationLink
            timings
            image{
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            contact_1{
                name
                phone
            }
            contact_2{
                name
                phone
            }
            topics_covered
            key_features
            position
            career_prospects
        }
    }
`

const InternshipTemplate = ({ data }) => {
    const internship = data.internshipsJson
    return (
        <Layout>
            <section className="pt-10 md:pt-20 pb-20 md:pb-20">
                <div className="container justify-center mx-auto px-10 lg:flex">
                    <div className="lg:mt-10 text-center lg:text-left lg:w-1/2">
                        <h1 className="text-6xl lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
                            {internship.title}
                        </h1>
                        <p className="mt-6 text-gray-600 font-montserrat">Sponsored by : {internship.sponsoredBy}</p>     
                        <p className="font-montserrat text-3xl lg:text-4xl mt-2 font-light">
                            {internship.position}
                        </p>
                        <p className="font-montserrat mb-4 text-xl lg:text-2xl mt-2 font-light">
                            {internship.duration} starting {internship.startDate}<br />{internship.timings}
                        </p>
                        <p className="font-montserrat mt-4 text-3xl lg:text-4xl font-light">
                            {internship.registrationFee}
                        </p>
                        <div className="mt-2 md:mt-6 text-xl font-bold font-raleway">
                            <a className="bg-primary-darker hover:text-primary rounded-full text-center text-white text-xl px-16 py-4" href={internship.registrationLink}>Register</a>
                        </div>
                    </div>
                    <div className="p-10 mt-12 sm:mt-16 md:mt-6 lg:w-1/2">
                        <Image fluid={internship.image.childImageSharp.fluid} />
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-16 lg:pb-10 lg:pt-10 bg-gray-100">
                <div className="container mx-auto pl-10 flex-col text-center">
                    <h2 className="w-full text-2xl mb-4 lg:text-2xl font-semibold">Key Features</h2>
                    <div className="mx-auto text-xl w-3/4">
                        <ul className="list-disc text-left text-lg lg:text-xl">
                            {
                                internship.key_features.map((feature,i)=>(
                                    <li className="mb-4" key={i}>{feature}</li>
                                ))
                            }
                            <li>Career Prospects in {internship.career_prospects}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-16 lg:pb-10 lg:pt-10 bg-primary-lighter">
                <div className="container mx-auto pl-10 flex-col text-center">
                    <h2 className="w-full text-2xl mb-4 lg:text-2xl font-semibold">Topics Covered</h2>
                    <div className="mx-auto text-xl w-3/4">
                        <ul className="list-disc text-left text-lg lg:text-xl">
                            {
                                internship.topics_covered.map((topic, i) => (
                                    <li className="mb-4" key={i}>{topic}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section id="what" className="mt-25 pt-10 lg:pb-20 lg:pt-20 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl lg:text-3xl font-semibold">Contact</h2>
                    <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
                        <div className="flex-1 px-3">
                            <Card className="mb-8 bg-white">
                                <p className="font-semibold text-xl">{internship.contact_1.name}</p>
                                <p className="mt-4">
                                    {internship.contact_1.phone}
                                </p>
                            </Card>
                        </div>
                        <div className="flex-1 px-3">
                            <Card className="mb-8 bg-white">
                                <p className="font-semibold text-xl">{internship.contact_2.name}</p>
                                <p className="mt-4">
                                    {internship.contact_2.phone}
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default InternshipTemplate;