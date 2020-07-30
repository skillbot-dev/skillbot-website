import React from 'react';
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from "../components/layout/Layout"
import Card from "../components/Card"
import SEO from '../components/SEO'
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import StatusPill from '../components/StatusPill';

export const query = graphql`
    query( $id: String! ) {
        markdownRemark(id: { eq: $id }){
            frontmatter {
                title
                sponsor
                start_date
                duration
                registration_fee
                registration_link
                timings
                status
                image {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                }
                contacts {
                    contact_name
                    phone_number
                    linkedin_url
                }
                topics_covered
                key_features
                work_position
                career_prospects
            }
        }
    }
`

const InternshipTemplate = ({data}) => {
    const internship = data.markdownRemark.frontmatter
    return (
        <Layout>
            <SEO title={`${internship.title}`} />
            {console.log(internship)}
            <section className="pt-10 md:pt-20">
                <div className="container justify-center my-auto mx-auto px-10 lg:flex">
                    <div className="my-10 text-center lg:text-left lg:w-1/2">
                        <h1 className="text-4xl lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
                            {internship.title}
                        </h1>
                        <p className="mt-6 text-gray-600 font-montserrat">{internship.sponsor}</p>
                    </div>
                    <div className="my-auto lg:w-1/2">
                        <Image fluid={internship.image.childImageSharp.fluid} />
                    </div>
                </div>
            </section>
            <section className="px-10 py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="mx-auto px-auto text-center lg:text-left">
                            <p className="mt-6 text-gray-600 font-montserrat">Registration Fee</p>
                            <p className="font-montserrat mb-4 text-2xl lg:text-3xl mt-2 font-semibold">
                                Rs.{internship.registration_fee}
                            </p>
                        </div>
                        <div className="mx-auto font-bold">
                            <OutboundLink
                                className={`noSelect ${internship.status ? `bg-primary-darker hover:text-primary` : `bg-gray-400 cursor-not-allowed`} rounded-full text-center text-white text-xl px-16 py-4`}
                                href={internship.status ? internship.registration_link : `#`}>
                                Register
                            </OutboundLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-200 pt-6 md:pt-10 pb-6 md:pb-10">
                <div className="container mx-auto px-6 lg:flex">
                    <div className="flex flex-wrap w-full">
                        <div className="flex-auto mx-2 px-2">
                            <p className="mt-6 text-gray-600 font-montserrat">Position</p>
                            <p className="font-montserrat mb-4 text-xl lg:text-2xl mt-2 font-semibold">
                                {internship.work_position}
                            </p>
                        </div>
                        <div className="flex-auto mx-2 px-2">
                            <p className="mt-6 text-gray-600 font-montserrat">Duration:</p>
                            <p className="font-montserrat mb-4 text-xl lg:text-2xl mt-2 font-semibold">
                                {internship.duration}
                            </p>
                        </div>
                        <div className="flex-auto mx-2 px-2">
                            <p className="mt-6 text-gray-600 font-montserrat">Start Date:</p>
                            <p className="font-montserrat mb-4 text-xl lg:text-2xl mt-2 font-semibold">
                                {internship.start_date}
                            </p>
                        </div>
                        <div className="flex-auto mx-2 px-2">
                            <p className="mt-6 text-gray-600 font-montserrat">Timings:</p>
                            <p className="font-montserrat mb-4 text-xl lg:text-2xl mt-2 font-semibold">
                                {internship.timings}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-16 lg:pb-10 lg:pt-10 bg-gray-100 font-montserrat">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl lg:text-3xl font-semibold">Key Features</h2>
                    <div className="mt-2 p-6 sm:p-6 text-lg xl:text-2xl text-left">
                        <ul className="flex flex-wrap list-inside list-disc ml-4 p-6">
                            {
                                internship.key_features.map((feature, i) => (
                                    <li className="mx-auto mb-4" key={i}>{feature}</li>
                                ))
                            }
                            <li className="mx-auto mb-4">Career Prospects as {internship.career_prospects}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-16 lg:pb-10 lg:pt-10 bg-primary-lighter font-montserrat">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl lg:text-3xl font-semibold">Topics Covered</h2>
                    <div className="mt-2 p-6 sm:p-6 text-lg xl:text-2xl text-left">
                        <ul className="flex flex-wrap list-disc list-inside ml-4 p-6">
                            {
                                internship.topics_covered.map((topic, i) => (
                                    <li className="mx-auto mb-4" key={i}>{topic}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section id="what" className="mt-25 pt-10 lg:pb-20 lg:pt-20 bg-gray-100">
                <div className="container justify center mx-auto text-center">
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">Contact and Payment Information</h2>
                    <div className="flex-none flex-wrap items-center justify-center sm:-mx-3 mt-12">
                        {
                            internship.contacts.map((person, i) => (
                                <div key={i} className="px-3">
                                    <Card className="mb-8 bg-white">
                                        <div className="inline-block mr-3">
                                            <p className="font-semibold text-xl">
                                                <OutboundLink className="noSelect text-gray-800" href={person.linkedin_url}>{person.contact_name}</OutboundLink>
                                            </p>
                                        </div>
                                        <div className="w-4 h-4 mr-3 inline-block">
                                            <OutboundLink className="noSelect text-lg text-white" href={person.linkedin_url}>
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>LinkedIn icon</title>
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="teal" />
                                                </svg>
                                            </OutboundLink>
                                        </div>
                                        <p className="mt-2 text-md">
                                            Consultant, Skillbot
                                    </p>
                                        <p className="mt-4 text-lg font-bold">
                                            {person.phone_number}
                                        </p>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
                        <div className="flex-1 px-3">
                            <Card className="mb-8 bg-white">
                                <p className="font-semibold text-xl">Bank Account Details</p>
                                <p className="mt-4">
                                    Name : Skillbot <br />
                                    Current Account Number : 1147201001632<br />
                                    Bank Name : Canara Bank<br />
                                    Branch IFSC : CNRB0001147<br />
                                    Branch Address : Banashankari 2nd Stage, Bengaluru, 560-070<br />
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