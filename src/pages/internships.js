import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import Image from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

const Internships = ({ data }) => {
    return (
        <Layout>
            <section className="pt-10 md:pt-20 pb-10 md:pb-20">
                <div className="container mx-auto px-8">
                    <div className="mx-auto text-center lg:text-left">
                        <h1 className="text-5xl text-center lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
                            Internship Opportunities
                        </h1>
                        <p className="text-center font-montserrat text-xl lg:text-2xl mt-6 font-light">
                            Register for an internship of your choice.
                        </p>
                    </div>
                </div>
            </section>
            <StaticQuery
                query={graphql`
                query{
                    allInternshipsJson{
                        edges{
                            node{
                                slug
                                title
                                sponsoredBy
                                startDate
                                duration
                                registrationFee
                                registrationLink
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
                    data.allInternshipsJson.edges.map((internship, i) => (
                        <SplitSection
                            reverseOrder={i % 2 == 0}
                            primarySlot={
                                <div className="text-center lg:text-left md:p-10 xl:text-left xl:p-20">
                                    <div>{console.log(internship.node)}</div>
                                    <h3 className="text-3xl font-semibold leading-tight">{internship.node.title}</h3>
                                    <p className="mt-8 text-xl font-light leading-relaxed mb-10">
                                        {internship.node.duration}<br />
                                        Starting : {internship.node.startDate}<br />
                                        Sponsored By : {internship.node.sponsoredBy}
                                    </p>
                                    <p className="mt-2 md:mt-6 text-xl font-bold font-raleway">
                                        <Button className="rounded-full" size="lg" toPage={`/internships/${internship.node.slug}`}>Know More</Button>
                                    </p>
                                </div>
                            }
                            secondarySlot={<Image fluid={internship.node.image.childImageSharp.fluid} alt={internship.node.slug} />}
                        />
                    ))
                )}
            />
        </Layout>
    );
}

export default Internships;
