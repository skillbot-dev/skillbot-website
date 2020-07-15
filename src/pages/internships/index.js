import React from 'react';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SplitSection from '../../components/SplitSection';
import Image from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import SEO from '../../components/SEO'

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields{
                        slug
                    }
                    frontmatter {
                        title
                        duration
                        sponsor
                        title
                        start_date
                        image{
                            childImageSharp{
                                fluid{
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }   
            }
        }
    }
`

const ListOfInternships = ({data}) => (
    <>
    {
        data.allMarkdownRemark.edges.map((internship, i) => (
            <SplitSection
                key={i}
                reverseOrder={i % 2 == 0}
                primarySlot={
                    <div className="text-center md:text-center lg:text-left xl:text-left">
                        <div>{console.log(internship)}</div>
                        <h3 className="text-3xl font-semibold leading-tight">{internship.node.frontmatter.title}</h3>
                        <p className="mt-8 text-xl font-light leading-relaxed mb-10">
                            {internship.node.frontmatter.duration}<br />
                                        Starting : {internship.node.frontmatter.start_date}<br />
                                        Sponsored By : {internship.node.frontmatter.sponsor}
                        </p>
                        <p className="mt-2 md:mt-6 text-lg lg:text-2xl xl:text-3xl font-bold font-raleway">
                            <Button className="rounded-full" size="lg" toPage={`${internship.node.fields.slug}`}>Know More</Button>
                        </p>
                    </div>
                }
                secondarySlot={<Image fluid={internship.node.frontmatter.image.childImageSharp.fluid} alt={internship.node.slug} />}
            />
        ))
    }
    </>
);

const Internships = ({ data }) => {
    const count = data.allMarkdownRemark.edges.length;
    let section;
    if (count == 0){
        section = <section> No internships </section>
    }else{
        section = <ListOfInternships data={data} />
    }
    return (
        <Layout>
            <SEO title={"Internships"} />
            <section className="pt-10 md:pt-20 pb-10 md:pb-20">
                <div className="container mx-auto px-8">
                    <div className="mx-auto text-center lg:text-left">
                        <h1 className="text-4xl text-center lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
                            Internship Opportunities
                        </h1>
                        <p className="text-center font-montserrat text-xl lg:text-2xl mt-6 font-light">
                            Register for an internship of your choice.
                        </p>
                    </div>
                </div>
            </section>
            {section}
        </Layout>
    );
}

export default Internships;
