import React, {useState} from 'react';
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Header = () => {

	const [navbarOpen, setNavbarOpen] = useState(false)
	
	return (
		<header className="sticky stop-0 bg-white shadow header font-raleway font-semibold" >
			<nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<div className="md:w-48 lg:w-64 w-48">
						<Link className="noSelect" to="/">
							<StaticQuery
								query={graphql
									`
                				query{
									file (relativePath : { eq : "skillbot_logo.jpg" }){
										childImageSharp{
											fluid{
												...GatsbyImageSharpFluid_withWebp_noBase64
											}
										}
									}
								}
              				`
								}
								render={(data) => (
									<Image fluid={data.file.childImageSharp.fluid} alt="Logo" loading={"eager"} />
								)}
							/>
						</Link>
					</div>
				</div>
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-400 border-teal-700 hover:text-teal-200 hover:border-teal-500" onClick={() => { setNavbarOpen(!navbarOpen) }}>
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
					</button>
				</div>
				<div id="menu" className={`${navbarOpen ? `block` : `hidden`} w-full lg:text-right flex-grow lg:flex lg:items-center lg:w-auto`}>
					<p className="text-sm lg:flex-grow">
						<Link className="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-500 hover:text-teal-200 mr-2 px-2" to="/">Home</Link>
						<Link className="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-500 hover:text-teal-200 mr-2 px-2" to="/about">About</Link>
						<Link className="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-500 hover:text-teal-200 mr-2 px-2" to="/internships">Internships</Link>
						<Link className="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-500 hover:text-teal-200 mr-2 px-2" to="/services">Services</Link>
					</p>
				</div>
			</nav>
		</header>
	)
}
export default Header;
