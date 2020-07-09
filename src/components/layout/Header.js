import React from 'react';
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Header = () => (
	<header className="sticky stop-0 bg-white shadow header font-raleway font-semibold" >
		<div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
			<div className="flex items-center text-2xl">
				<div className="w-64 p-6">
					<StaticQuery
						query={graphql
							`
                				query{
									file (relativePath : { eq : "skillbot_logo.png" }){
										childImageSharp{
											fluid{
												...GatsbyImageSharpFluid_withWebp
											}
										}
									}
								}
              				`
						}
						render = {(data) => (
							<Image fluid={data.file.childImageSharp.fluid} alt="Logo" loading={"eager"} />
						)}
					/>
				</div>
			</div>
			<div className="flex mt-4 sm:mt-0 text-md lg:text-xl xl:text-xl">
				<Link className="px-4" to="/">
					Home
        		</Link>
				<Link className="px-4" href="/about">
					About
        		</Link>
				<Link className="px-4" to="/internships">
					Internships
        		</Link>
				<Link className="px-4" to="/services">
					Services
        		</Link>
			</div>
		</div>
	</header>
);

export default Header;
