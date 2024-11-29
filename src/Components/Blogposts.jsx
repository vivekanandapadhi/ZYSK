import olivia from './images/olivia.png'
import lana from './images/lana.png'
import pheonix from './images/pheonix.png'
import Blog1 from './images/Blog1.png'
import Blog2 from './images/Blog2.png'
import Blog3 from './images/Blog3.png'

const Blogposts = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto text-left">
            <div className="flex flex-col mb-6">
                <div>
                    <p className="text-sm text-purple-600 font-medium">Our blog</p>
                    <div className="flex items-center justify-between">
                        <h2 className="text-4xl font-bold mt-1">Latest blog posts</h2>
                        <button className="text-white bg-purple-600 font-medium text-sm focus:outline-none py-2 px-4 border rounded-md border-purple-600 hidden lg:block">
                            View all posts
                        </button>
                    </div>
                    <p className="text-gray-600 text-lg mt-2">
                        Tools and strategies modern teams need to help their companies grow.
                    </p>
                </div>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white overflow-hidden">
                        <img
                            src={Blog1}
                            alt="UX review presentations"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-purple-600 font-medium mb-1">Design</p>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="block text-xl font-bold text-black"
                                >
                                    UX review presentations
                                </a>
                                <span className="text-black">↗</span>
                            </div>
                            <div className="mt-4">
                                <div className="text-sm text-justify text-gray-600">
                                    <p>
                                        How do you create compelling presentations that wow your colleagues and impress your managers?
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src={olivia}
                                        alt="Olivia Rhye"
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <p className="text-base text-black-600">By Olivia Rhye <br /><span className="text-sm text-gray-600">20 Jan 2024</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden">
                        <img
                            src={Blog2}
                            alt="Migrating to Linear 101"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-purple-600 font-medium mb-1">Product</p>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="block text-xl font-bold text-black"
                                >
                                    Migrating to Linear 101
                                </a>
                                <span className="text-black">↗</span>
                            </div>
                            <div className="mt-4">
                                <div className="text-sm text-justify text-gray-600">
                                    <p>
                                        Linears help streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src={pheonix}
                                        alt="Phoenix Baker"
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <p className="text-base text-black-600">By Phoenix Baker <br /><span className="text-sm text-gray-600">19 Jan 2024</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden">
                        <img
                            src={Blog3}
                            alt="Building your API stack"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-purple-600 font-medium mb-1">Software Engineering</p>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="block text-xl font-bold text-black"
                                >
                                    Building your API stack
                                </a>
                                <span className="text-black">↗</span>
                            </div>
                            <div className="mt-4">
                                <div className="text-sm text-justify text-gray-600">
                                    <p>
                                        The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing.
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src={lana}
                                        alt="Lana Steiner"
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <p className="text-base text-black-600">By Lana Steiner <br /><span className="text-sm text-gray-600">18 Jan 2024</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-6 sm:mt-0 lg:hidden">
                <button className="text-white bg-purple-600 font-medium text-sm focus:outline-none py-2 px-4 border rounded-md border-purple-600 w-full sm:w-auto">
                    View all posts
                </button>
            </div>
        </div>
    );
};

export default Blogposts;
