import { useState } from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const {ref, isVisible} = useScrollFadeIn();

  const faqs = [
    {
      question: "Is the hair 100% virgin human hair?",
      answer: "Yes it is.",
    },
    {
      question: "Do you ship worldwide?",
      answer: "We ship within Nigeria alone.",
    },
    {
      question: "How long does the wig last?",
      answer: "It lasts for years.",
    },
    {
      question: "Do you accept returns or exchange?",
      answer: "Yes, if bought in less than a week.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      ref={ref}
     className={`w-full max-w-3xl mx-auto px-4 py-16 
    transition-all duration-700 ease-out 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}> 
      <h2 className="text-4xl font-bold text-center mb-10 m-auto md:w-[20ch] xl:text-5xl">
        Hair Questions? Answered
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-2xl font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out bg-green-50 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-4 pt-0 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
