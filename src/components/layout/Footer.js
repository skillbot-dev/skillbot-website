import React from 'react';
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { SocialIcon } from 'react-social-icons';
const Footer = () => (
	<footer className="bg-gray-900 text-white">
		<div className="container mx-auto py-16 px-3">
			<div className="flex flex-wrap">
				<div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
					<StaticQuery
						query={graphql
							`
                				query{
									file (relativePath : { eq : "skillbot_white_logo.png" }){
										childImageSharp{
											fluid{
												...GatsbyImageSharpFluid_withWebp_tracedSVG
											}
										}
									}
								}
              				`
						}
						render={(data) => (
							<Image className="w-24 md:w-30 xl:w-48" fluid={data.file.childImageSharp.fluid} alt="Logo" loading={"lazy"} />
						)}
					/>
				</div>
				<div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 p-6">
					<h2 className="text-lg font-semibold">Site Navigation</h2>
					<ul className="mt-4 leading-loose">
						<li key={1}>
							<Link to="/">
								Home
        		  </Link>
						</li>
						<li key={2}>
							<Link to="/about">
								About
        		</Link>
						</li>
						<li key={3}>
							<Link to="/internships">
								Internships
        		</Link>
						</li>
						<li key={4}>
							<Link to="/services">
								Services
        		</Link>
						</li>
					</ul>
				</div>
				<div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 p-6">
					<h2 className="text-lg font-semibold">Social Media & Contact</h2>
					<ul className="mt-4 leading-loose">
						<li key={1}>
							<SocialIcon style={{ height: '30px', width: '30px' }} className="mr-2" bgColor="white" url="https://linkedin.com/company/skillbot" />
							<a className="text-lg text-white" href="https://linkedin.com/company/skillbot">LinkedIn</a>
						</li>
						<li key={2}>
							<SocialIcon style={{ height: '30px', width: '30px' }} className="mr-2" bgColor="white" url="mailto:info.skillbot@gmail.com" />
							<a className="text-lg text-white" href="mailto:info.skillbot@gmail.com">info.skillbot@gmail.com</a>
						</li>
					</ul>
				</div>
				<div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 p-6">
					<h2 className="text-lg font-semibold">©Copyrights Skillbot : Education Strategy 2020-2021</h2>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
