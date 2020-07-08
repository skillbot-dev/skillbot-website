import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white">
  <div className="container mx-auto py-16 px-3">
      <div className="flex -mx-3">
        <div className="flex-1 px-3 p-6">
          <h2 className="text-lg font-semibold">Developer</h2>
          <p className="mt-5">Designed and Developed by Srigovind Nayak</p>
        </div>
        <div className="flex-1 px-3 p-6">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://linkedin.com/company/skillbot">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
