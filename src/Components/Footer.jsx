import React from 'react';
import uilogo from './images/UIlogo.png'; // Assuming the logo image is in the 'images' folder
import SectionSeparator from './SectionSeparator';

const Footer = () => {
  return (
    <footer className="text-justify">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        
        <div className="col-span-1">
          <h2 className="text-xl font-bold text-gray-500 mb-4">Product</h2>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold">New</span></li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h2 className="text-xl font-bold text-gray-500 mb-4">Company</h2>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h2 className="text-xl font-bold text-gray-500 mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h2 className="text-xl font-bold text-gray-500 mb-4">Use cases</h2>
          <ul className="space-y-2">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h2 className="text-xl font-bold text-gray-500 mb-4">Social</h2>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h2 className="text-xl font-bold text-gray-500 mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
    

        <div className="col-span-2 lg:col-span-6 flex flex-col lg:flex-row justify-between items-start mt-8">
          <div className="flex items-center mb-2 lg:mb-0">
            <img src={uilogo} alt="Untitled UI Logo" className="w-8 h-8 mr-2" />
            <p className="text-gray-700 font-medium">Untitled UI</p>
          </div>
          <p className="text-gray-500 text-sm">© 2027 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
