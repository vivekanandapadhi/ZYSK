import React from "react";
import icon1 from './images/Features/icon1.png'
import icon2 from './images/Features/icon2.png'
import icon3 from './images/Features/icon3.png'
import icon4 from './images/Features/icon4.png'
import icon5 from './images/Features/icon5.png'
import icon6 from './images/Features/icon6.png'

const FeaturesSection = () => {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-sm font-semibold text-indigo-600 uppercase mb-4">
                    Features
                </h2>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Analytics that feels like it’s from the future
                </h1>
                <p className="text-gray-600  text-center mb-12">
                    Powerful, self-serve product and growth analytics to help you convert,
                    engage, <br />and retain more users. Trusted by over 4,000 startups.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center ">
                        <img
                            src={icon1}
                            alt="Lock Icon"
                            className="mx-auto w-12 h-12 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Share team inboxes
                        </h3>
                        <p className="text-gray-600">
                            Whether you have a team of 2 or 200, our shared team inboxes keep
                            everyone on the same page and in the loop.
                        </p>
                    </div>

                    <div className="text-center ">
                        <img
                            src={icon2}
                            alt="Lightning Icon"
                            className="mx-auto w-12 h-12 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Deliver instant answers
                        </h3>
                        <p className="text-gray-600">
                            An all-in-one customer service platform that helps you balance
                            everything your customers need to be happy.
                        </p>
                    </div>

                    <div className="text-center">
                        <img
                            src={icon3}
                            alt="Chart Icon"
                            className="mx-auto w-12 h-12 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Manage your team with reports
                        </h3>
                        <p className="text-gray-600">
                            Measure what matters with Untitled's easy-to-use reports. You can
                            filter, export, and drill down on the data in a couple clicks.
                        </p>
                    </div>

                    <div className="text-center ">
                        <img
                            src={icon4}
                            alt="Chat Icon"
                            className="mx-auto w-12 h-12 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Connect with customers
                        </h3>
                        <p className="text-gray-600">
                            Solve a problem or close a sale in real-time with chat. If no one
                            is available, customers are seamlessly routed to email without
                            confusion.
                        </p>
                    </div>

                    <div className="text-center">
                        <img
                            src={icon5}
                            alt="Link Icon"
                            className="mx-auto w-12 h-12 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Connect the tools you already use
                        </h3>
                        <p className="text-gray-600">
                            Explore 100+ integrations that make your day-to-day workflow more
                            efficient and familiar. Plus, our extensive developer tools.
                        </p>
                    </div>

                    <div className="text-center ">
                        <img
                            src={icon6}
                            alt="Handshake Icon"
                            className="mx-auto w-12 h-12 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Our people make the difference
                        </h3>
                        <p className="text-gray-600">
                            We’re an extension of your customer service team, and all of our
                            resources are free. Chat to our friendly team 24/7 when you need
                            help.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
