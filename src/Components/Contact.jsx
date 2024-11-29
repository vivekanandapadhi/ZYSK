import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#F9FAFB] py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center gap-8">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
          Start your free trial
        </h1>
        <p className="text-gray-700 font-normal text-lg sm:text-xl lg:text-2xl">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="border-purple-700 text-gray-900 py-3 px-5 border rounded-lg text-base font-semibold w-full sm:w-auto">
            Learn more
          </button>
          <button className="bg-purple-700 text-white py-3 px-5 border rounded-lg text-base font-semibold w-full sm:w-auto">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
