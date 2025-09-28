"use client";

import { useState } from "react";
import Button from "./Button";
import CopyToClipboard from "./CopyToClipboard";
import { siteContent } from "@/lib/content";

export default function HowToBuy() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-to-buy" className="py-20 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">{siteContent.howToBuy.title}</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Follow these simple steps to get your CLESS tokens and join the community.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {siteContent.howToBuy.steps.map((step, index) => (
              <div
                key={step.step}
                className={`group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  activeStep === step.step
                    ? "border-electric-cyan/50 bg-electric-cyan/5"
                    : "border-soft-gray/20 hover:border-electric-cyan/30"
                }`}
                onClick={() => setActiveStep(step.step)}
              >
                <div className="flex items-start space-x-6">
                  {/* Step Number */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      activeStep === step.step
                        ? "bg-electric-cyan text-graphite shadow-glow"
                        : "bg-gray-700 text-soft-gray group-hover:bg-electric-cyan/20 group-hover:text-electric-cyan"
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        activeStep === step.step ? "text-electric-cyan" : "text-white group-hover:text-electric-cyan"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-soft-gray leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`flex-shrink-0 transition-all duration-300 ${
                      activeStep === step.step ? "text-electric-cyan rotate-90" : "text-soft-gray group-hover:text-electric-cyan"
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>

                {/* Progress Line */}
                {index < siteContent.howToBuy.steps.length - 1 && (
                  <div className="absolute left-9 top-20 w-0.5 h-6 bg-gradient-to-b from-electric-cyan/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-soft-gray/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Quick Actions</h3>
              <p className="text-soft-gray">Everything you need to get started</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contract Address */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Contract Address</h4>
                <CopyToClipboard text={siteContent.contract.address}>
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-soft-gray/20 hover:border-electric-cyan/50 transition-colors duration-200 cursor-pointer group">
                    <span className="text-white font-mono text-sm truncate mr-4">
                      {siteContent.contract.address}
                    </span>
                    <div className="flex items-center space-x-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-soft-gray group-hover:text-electric-cyan transition-colors duration-200"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span className="text-xs text-soft-gray group-hover:text-electric-cyan transition-colors duration-200">
                        Copy
                      </span>
                    </div>
                  </div>
                </CopyToClipboard>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <div className="space-y-3">
                  <Button
                    href={siteContent.social.dexLink}
                    external
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mr-2"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6" />
                      <path d="M1 12h6m6 0h6" />
                    </svg>
                    Open DEX
                  </Button>
                  
                  <Button
                    href="#chart"
                    variant="outline"
                    className="w-full justify-center"
                    onClick={() => {
                      const element = document.getElementById("chart");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mr-2"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                    </svg>
                    View Chart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-plasma-magenta/5 border border-plasma-magenta/20 rounded-2xl p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-plasma-magenta"
                >
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-plasma-magenta mb-2">Important Reminders</h4>
                <ul className="space-y-2 text-soft-gray text-sm">
                  <li>• Always verify the contract address before trading</li>
                  <li>• Set appropriate slippage (1-3%) to avoid failed transactions</li>
                  <li>• Never share your private keys or seed phrase</li>
                  <li>• Only invest what you can afford to lose</li>
                  <li>• Join our community for support and updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
