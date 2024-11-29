import React, { useState } from "react";
import supportteam from "./images/supportteam.png";

const FAQ = () => {
  // State to track which question is expanded
  const [expanded, setExpanded] = useState(null);

  // Function to toggle question visibility
  const toggleQuestion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        Frequently asked questions
      </h2>
      <p className="text-center text-gray-600 mt-4 mb-8">
        Everything you need to know about the product and billing.
      </p>

      <div className="space-y-4">
        {[
          {
            question: "Is there a free trial available?",
            answer:
              "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
          },
          {
            question: "Can I change my plan later?",
            answer:
              "Yes, you can upgrade or downgrade your plan anytime from your account settings.",
          },
          {
            question: "What is your cancellation policy?",
            answer:
              "You can cancel your subscription anytime. Your access will remain until the end of the billing period.",
          },
          {
            question: "Can other info be added to an invoice?",
            answer:
              "Yes, you can add custom notes or details to your invoices from the settings page.",
          },
          {
            question: "How does billing work?",
            answer:
              "We bill your credit card at the beginning of each billing cycle. You’ll receive a receipt via email.",
          },
          {
            question: "How do I change my account email?",
            answer:
              "You can update your email in the account settings page under 'Personal Information'.",
          },
        ].map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full py-3 text-left text-base font-medium text-gray-800"
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span
                onClick={() => toggleQuestion(index)}
                className={`border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer ${
                  expanded === index ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {expanded === index ? "−" : "+"}
              </span>
            </button>
            {expanded === index && (
              <p className="text-gray-600 text-justify mt-2 text-sm">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col bg-[#F9FAFB] items-center text-center">
        <img
          src={supportteam}
          alt="Support team"
          className="w-auto h-auto rounded-full mb-4 p-6"
        />
        <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Can’t find the answer you’re looking for? Please chat with our
          friendly team.
        </p>
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg text-sm">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
