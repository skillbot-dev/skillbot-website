import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky stop-0 bg-white shadow header font-raleway" >
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-64">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 text-md lg:text-xl xl:text-xl">
        <AnchorLink className="px-4" href="#">
          Home
        </AnchorLink>
        <AnchorLink className="px-4" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          Internships
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
