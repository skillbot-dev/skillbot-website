import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import Image from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import Card from '../components/Card'

const Services = ({ data }) => {
    return (
        <Layout>
            <section className="pt-10 md:pt-20 pb-10 md:pb-20">
                <div className="container mx-auto px-8">
                    <div className="mx-auto text-center lg:text-left">
                        <h1 className="text-5xl text-center lg:text-6xl xl:text-6xl font-montserrat font-bold leading-none">
                            Services Offered
                        </h1>
                        <p className="text-center font-montserrat text-2xl lg:text-2xl mt-6 font-light">
                            <span className="text-2xl italic font-light">
                                "Up Skill for Growth"
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <section id="what" className="mt-25 pt-10 lg:pb-18 lg:pt-18 bg-primary-lighter">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-semibold leading-relaxed">Skillbot Verticals</h2>
                    <div className="flex flex-wrap sm:-mx-3 p-6">
                        <div className="flex-1 w-full md:w-1/2 lg:w-1/3 px-3">
                            <Card className="mb-8 bg-white">
                                <p className="font-semibold text-xl">Engineering</p>
                            </Card>
                        </div>
                        <div className="flex-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-3">
                            <Card className="mb-8 bg-white p-6">
                                <p className="font-semibold text-xl">Management</p>
                            </Card>
                        </div>
                        <div className="flex-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-3">
                            <Card className="mb-8 bg-white">
                                <p className="font-semibold text-xl">Behaviour</p>
                            </Card>
                        </div>
                        <div className="flex-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/2 px-3">
                            <Card className="mb-8 bg-white">
                                <p className="font-semibold text-xl">Facilities</p>
                            </Card>
                        </div>
                        <div className="flex-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/2 px-3">
                            <Card className="mb-8 bg-white p-6">
                                <p className="font-semibold text-xl">Transformations</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-16 lg:pb-10 lg:pt-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-semibold">Advantage of adopting Skillbot</h2>
                    <div className="mt-2 p-6 sm:p-6 text-lg xl:text-2xl text-left">
                        <ul className="list-disc ml-4 p-6 text-justify">
                            <li className="mb-4">
                                Fresh pool of talent with right blend of skills and attitude
                            </li>
                            <li className="mb-4">
                                We train students at campus for specialized skills relevant for the roles including behavioral skills with holistic method
                            </li>
                            <li className="mb-4">
                                We train students at campus for specialized skills relevant for the roles including behavioral skills with holistic method
                            </li>
                            <li className="mb-4">
                                We train the trainers to become self-reliant 
                            </li>
                            <li className="mb-4">
                                We undertake turnkey projects for organizational perception building and transformations for effectiveness.
                            </li>
                            <li className="mb-4">
                                We undertake perception and branding of any educational institutions.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <StaticQuery
                query={graphql`
                query{
                    allServicesJson{
                        edges{
                            node{
                                slug
                                title
                                features
                                image{
                                    childImageSharp{
                                        fluid{
                                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
                render={data => (
                    data.allServicesJson.edges.map((service, i) => (
                        <SplitSection
                            reverseOrder={i % 2 == 0}
                            primarySlot={
                                <div className="text-center lg:text-left md:p-10 xl:text-left xl:p-20">
                                    <h3 className="text-3xl font-semibold leading-tight">{service.node.title}</h3>
                                    <ul className="list-disc mt-6 ml-6 text-xl">
                                        {
                                            service.node.features.map(feature => (
                                                <li className="mb-4">{feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                            secondarySlot={<Image fluid={service.node.image.childImageSharp.fluid} alt={service.node.slug} />}
                        />
                    ))
                )}
            />
        </Layout>
    );
}

export default Services;
