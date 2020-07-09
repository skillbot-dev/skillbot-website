import React from 'react'
import Layout from '../components/layout/Layout'
import { grapql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
const About = () => {
    return (
        <Layout>
            <section className="pt-10 md:pt-20 pb-10 md:pb-10">
                <div className="container mx-auto px-8">
                    <div className="mx-auto text-center lg:text-left">
                        <h1 className="text-5xl text-center lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
                            About
                        </h1>
                        <p className="text-center font-montserrat text-xl lg:text-2xl mt-6 font-light">
                            The founder
                        </p>
                    </div>
                </div>
            </section>
            <section className="p-4 mt-10 text-center items-center bg-gray-100">
                <div className="p-4 mx-auto container justify-center">
                    <div className="text-xl">
                        <StaticQuery
                            query={graphql`
                            query {
                                file(relativePath: {eq: "vaishnavee_manaay_founder.png"}) {
                                    childImageSharp{
                                        fluid{
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        `
                            }
                            render={(data) => (
                                <Image className="m-10 w-32 h-32 lg:w-48 lg:h-48 mx-auto " fluid={data.file.childImageSharp.fluid} alt="FounderImage" />
                            )}
                        />
                    </div>
                    <div className="p-4 w-full mx-auto">
                        <h1 className="text-xl font-bold">Vaishnavee Maanay</h1>
                        <h2 className="text-l font-light mb-4">Founder</h2>
                        <div className="text-justify">
                            <p>
                                As an entrepreneur, academic administrator, and academician, Vaishnavee dons multiple roles. She is actively involved in the
                                administration of BNM Institute of Technology, a reputed institution in Bangalore. Her concerted efforts are focused towards
                                developing collaborative, proactive, and inclusive tactical processes in Higher Education Institutions. Along with administration,
                                her passion for academics and teaching is evident in her regular teaching assignments at BNMIT. Her down to earth nature
                                makes her very approachable to her colleagues and staff alike.
                            </p><br />
                            <p>
                                Besides academics and administration, she is also an entrepreneur. Her passion for providing a natural and fun-learning
                                environment for young children, has led to introducing the concept of kids’ activity farm in Bangalore. “I feel the strong need to
                                make our children aware about farming and challenges faced by our farmer community. As a result of this urge, I have
                                started “The Big Barn farm”.
                            </p><br />
                            <p>
                                Her ability in logical planning, systematic thinking along with creativity and compassion for education has led her to start “ Skill
                                Bot”. Skill Bot aims to help Higher Education Institutions create a talent transformation pathway. This training consultancy will
                                enable a more agile, employable and adaptable mindset amongst students and recruiters.
                            </p><br />
                            <p>
                                Vaishnavee’s upbringing and education have given her the capacity for fearless thinking and a practical approach that is needed
                                to meet the challenges posed by the shifting landscapes of business.
                            </p><br />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default About;