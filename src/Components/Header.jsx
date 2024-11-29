import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import stats from "./images/Content.png";
import olivia from "./images/olivia.png";
import uilogo from "./images/UIlogo.png";
import SectionSeparator from "./SectionSeparator";
import statsmobile from "./images/statsmobile.png";
import hnav from "./images/hiddennav.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import bloglogo from "./images/bloglogo.png";
import stories from "./images/stories.png";
import play from "./images/play.png";

function Header() {
  const [showContent, setShowContent] = useState(false);

  const handleNavClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <img src={uilogo} alt="Logo" className="w-8 h-8" />
              <h1 className="text-md font-bold text-black-600">Untitled UI</h1>
            </div>
            <nav className="hidden lg:flex items-center space-x-6 text-lg text-gray-700">
              <a href="#home" className="hover:text-gray-900">
                Home
              </a>
              <a
                href="#products"
                className="hover:text-gray-900"
                onClick={handleNavClick}
              >
                Products
                <KeyboardArrowDownOutlinedIcon />
              </a>
              <a
                href="#resources"
                className="hover:text-gray-900"
                onClick={handleNavClick}
              >
                Resources <KeyboardArrowDownOutlinedIcon />
              </a>
              <a href="#pricing" className="hover:text-gray-900">
                Pricing
              </a>
            </nav>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <img
              src={olivia}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <button className="lg:hidden text-gray-600">
            <MenuIcon className="text-2xl" />
          </button>
        </div>
      </header>

      <SectionSeparator />
      {showContent && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 mt-3 bg-white p-4 rounded-lg shadow-md z-50 w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="col-span-2">
            <div className="flex items-start mb-3">
              <img src={bloglogo} alt="Icon 1" className="w-4 h-4 mr-3" />
              <div>
                <h3 className="text-purple-600 text-base font-bold text-left">
                  Blog 1
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  The latest industry news, updates, and info.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <img src={stories} alt="Icon 2" className="w-4 h-4 mr-3" />
              <div>
                <h3 className="text-purple-600 text-base font-bold text-left">
                  Customer Stories
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Learn how our customers are making big changes.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <img src={play} alt="Icon 3" className="w-4 h-4 mr-3" />
              <div>
                <h3 className="text-purple-600 text-base font-bold text-left">
                  Video Tutorials
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Get up and running on new features and techniques.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <img
              src={hnav}
              alt="Right Side Image"
              className="w-full h-auto rounded-lg max-w-xs"
            />
            <div className="w-full text-left mt-3">
              <p className="text-black font-semibold text-sm mb-2">
                We've just released an update
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Check out the all-new dashboard view. Pages now load faster.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Dismiss
                </a>
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-800 font-semibold text-sm"
                >
                  Changelog
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-8 w-auto p-1">
              <div className="pr-1 flex items-center justify-center space-x-4">
                <span className="inline-flex items-center space-x-2 border bg-purple-100 text-purple-600 p-1 px-2 text-xs rounded-full border-purple-300">
                  <span className="bg-white px-2 py-0.5 border rounded-full border-purple-300">
                    New Features
                  </span>
                  <span className="px-1">Check out the team dashboard →</span>
                </span>
              </div>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight max-w-xs sm:max-w-4xl">
                Beautiful analytics to grow smarter
              </h1>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 w-full sm:w-auto">
              <button className="border border-gray-400 hover:bg-purple-600 text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center w-full sm:w-auto mb-4 sm:mb-0">
                <PlayCircleOutlineOutlinedIcon className="mr-2" />
                <span>Demo</span>
              </button>
              <button className="bg-purple-600 text-white font-bold py-4 px-6 rounded-lg border border-purple-500 w-full sm:w-auto">
                Sign Up
              </button>
            </div>

            <div className="mt-16">
              <img
                src={stats}
                alt="stats"
                className="hidden lg:block w-full h-auto object-cover"
              />
              <img
                src={statsmobile}
                alt="mobile stats"
                className="lg:hidden w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
