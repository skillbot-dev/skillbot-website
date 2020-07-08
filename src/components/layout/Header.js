import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import { Link } from 'gatsby'

const Header = () => (
  <header className="sticky stop-0 bg-white shadow header font-raleway" >
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-64">
          <LogoIcon />
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
      </div>
    </div>
  </header>
);

export default Header;
