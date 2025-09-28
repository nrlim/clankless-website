"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";
import Modal from "./Modal";
import SocialPopup from "./SocialPopup";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activePopup, setActivePopup] = useState<"twitter" | "telegram" | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Find answers to common questions about Clankess. Can't find what you're looking for? 
            Join our community for more support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {siteContent.faq.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-soft-gray/20 overflow-hidden transition-all duration-300 hover:border-electric-cyan/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none group"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-electric-cyan transition-colors duration-200 pr-4">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-6 h-6 text-soft-gray group-hover:text-electric-cyan transition-all duration-300 ${
                      openIndex === index ? "rotate-180 text-electric-cyan" : ""
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-soft-gray/20 pt-4">
                      <p className="text-soft-gray leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-electric-cyan/10 to-plasma-magenta/10 backdrop-blur-sm rounded-3xl p-8 border border-electric-cyan/20">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-soft-gray mb-6">
              Our community is here to help! Join our social channels for real-time support and discussions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setActivePopup("telegram")}
                className="inline-flex items-center justify-center px-6 py-3 bg-plasma-magenta/20 hover:bg-plasma-magenta/30 border border-plasma-magenta/30 rounded-xl text-plasma-magenta font-medium transition-all duration-200 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Join Telegram
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </button>
              
              <button
                type="button"
                onClick={() => setActivePopup("twitter")}
                className="inline-flex items-center justify-center px-6 py-3 bg-electric-cyan/20 hover:bg-electric-cyan/30 border border-electric-cyan/30 rounded-xl text-electric-cyan font-medium transition-all duration-200 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search FAQ */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ..."
              className="w-full px-6 py-4 bg-gray-800/50 border border-soft-gray/20 rounded-2xl text-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:border-transparent pl-12"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-soft-gray"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
          <p className="text-center text-sm text-soft-gray mt-3">
            Type keywords to quickly find answers to your questions
          </p>
        </div>
      </div>
      {/* Social Popups */}
      <Modal isOpen={activePopup === "twitter"} onClose={() => setActivePopup(null)}>
        <SocialPopup platform="twitter" />
      </Modal>
      <Modal isOpen={activePopup === "telegram"} onClose={() => setActivePopup(null)}>
        <SocialPopup platform="telegram" />
      </Modal>
    </section>
  );
}
