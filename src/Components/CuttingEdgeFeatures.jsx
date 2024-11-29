import React from "react";
import analytics_desktop from './images/Analytics.png';
import analytics_mobile from './images/Analytics_mobile.png';
import icon1 from './images/Features/icon1.png';
import icon2 from './images/Features/icon2.png';
import icon3 from './images/Features/icon3.png';

const CuttingEdgeFeatures = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-purple-600 ">
            <span className="border  border-purple-600 px-3 py-1 rounded-full bg-purple-100">Features</span>
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            Cutting-edge features for advanced analytics
          </h1>
          <p className="text-gray-600 mt-4 text-1xl max-w-2xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          <img
            src={analytics_desktop}
            alt="Analytics Desktop"
            className="hidden md:block w-full"
          />
          <img
            src={analytics_mobile}
            alt="Analytics Mobile"
            className="block md:hidden mx-auto w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={icon1}
              alt="Team Inboxes"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Share team inboxes
            </h3>
            <p className="text-gray-600  mt-2">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
            <a
              href="#"
              className="text-indigo-600 font-medium mt-4 inline-block"
            >
              Learn more →
            </a>
          </div>

          <div className="text-center">
            <img
              src={icon2}
              alt="Instant Answers"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Deliver instant answers
            </h3>
            <p className="text-gray-600  mt-2">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be <br /> happy.
            </p>
            <a
              href="#"
              className="text-indigo-600 font-medium mt-4 inline-block"
            >
              Learn more →
            </a>
          </div>

          <div className="text-center">
            <img
              src={icon3}
              alt="Team Reports"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Manage your team with reports
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Measure what matters with Untitled's easy-to-use reports. You can
              filter, export, and drill down on the data in a couple of clicks.
            </p>
            <a
              href="#"
              className="text-indigo-600 font-medium mt-4 inline-block"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuttingEdgeFeatures;
