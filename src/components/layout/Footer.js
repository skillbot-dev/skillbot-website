import React from 'react';
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics';
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
							<Link className="noSelect" to="/">
								<Image className="w-24 md:w-30 xl:w-48" fluid={data.file.childImageSharp.fluid} alt="Logo" loading={"lazy"} />
							</Link>
						)}
					/>
				</div>
				<div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 p-6">
					<h2 className="text-lg font-semibold">Site Navigation</h2>
					<ul className="mt-4 leading-loose">
						<li key={1}>
							<Link className="noSelect" to="/">
								Home
        		  </Link>
						</li>
						<li key={2}>
							<Link className="noSelect" to="/about">
								About
        		</Link>
						</li>
						<li key={3}>
							<Link className="noSelect" to="/internships">
								Internships
        		</Link>
						</li>
						<li key={4}>
							<Link className="noSelect" to="/services">
								Services
        		</Link>
						</li>
					</ul>
				</div>
				<div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 p-6">
					<h2 className="text-lg font-semibold">Social Media & Contact</h2>
					<ul className="mt-4 leading-loose">
						<li key={1}>
							<div className="w-4 h-4 mr-3 inline-block ">
								<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>LinkedIn icon</title>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white" />
								</svg>
							</div>
							<OutboundLink className="noSelect text-lg text-white" href="https://linkedin.com/company/skillbot">LinkedIn</OutboundLink>
						</li>
						<li key={2}>
							<div className="w-4 h-4 mr-3 inline-block">
								<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>Gmail icon</title>
									<path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" fill="white" />
								</svg>
							</div>
							<OutboundLink className="noSelect text-lg text-white" href="mailto:info.skillbot@gmail.com">info.skillbot@gmail.com</OutboundLink>
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
