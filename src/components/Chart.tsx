"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";

export default function Chart() {
  const [pairAddress, setPairAddress] = useState(siteContent.contract.pairAddress);
  const [chainSlug, setChainSlug] = useState(siteContent.contract.chainSlug);

  const embedUrl = `https://dexscreener.com/${chainSlug}/${pairAddress}?embed=1&theme=dark`;

  return (
    <section id="chart" className="py-16 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Live Chart</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Track CLESS price movements and trading activity in real-time on Dexscreener.
          </p>
        </div>

        {/* Configuration Panel (for easy updates) */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-soft-gray/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Chart Configuration</h3>
              <div className="flex items-center space-x-2 text-sm text-soft-gray">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.06 1.56V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.56-1.06H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.06-1.56V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.06 1.56 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.56 1.06H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.56 1.06z" />
                </svg>
                <span>Update these values to change the chart</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-soft-gray mb-2">
                  Chain Slug
                </label>
                <input
                  type="text"
                  value={chainSlug}
                  onChange={(e) => setChainSlug(e.target.value)}
                  placeholder="e.g., plasma, ethereum, bsc"
                  className="w-full px-4 py-2 bg-gray-900/50 border border-soft-gray/20 rounded-xl text-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-soft-gray mb-2">
                  Pair Address
                </label>
                <input
                  type="text"
                  value={pairAddress}
                  onChange={(e) => setPairAddress(e.target.value)}
                  placeholder="0xYOUR_PAIR_ADDRESS"
                  className="w-full px-4 py-2 bg-gray-900/50 border border-soft-gray/20 rounded-xl text-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-electric-cyan/5 border border-electric-cyan/20 rounded-xl">
              <div className="flex items-start space-x-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-electric-cyan mt-0.5 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <div className="text-sm text-electric-cyan">
                  <p className="font-medium mb-1">How to find your pair address:</p>
                  <p>1. Go to dexscreener.com and search for your token</p>
                  <p>2. Click on your trading pair</p>
                  <p>3. Click "Share" → "Embed" to get the pair address</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-soft-gray/20 shadow-soft-lg">
            {pairAddress && pairAddress !== "0xYOUR_PAIR_ADDRESS" ? (
              <iframe
                src={embedUrl}
                style={{ width: "100%", height: "600px", border: "0" }}
                loading="lazy"
                allow="clipboard-write"
                title="Dexscreener Chart"
                className="rounded-3xl"
              />
            ) : (
              <div className="flex items-center justify-center h-96 text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-electric-cyan/10 rounded-2xl flex items-center justify-center mx-auto">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-electric-cyan"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Chart Coming Soon</h3>
                    <p className="text-soft-gray max-w-md">
                      Update the pair address above to display the live trading chart from Dexscreener.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://dexscreener.com/${chainSlug}/${pairAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-electric-cyan/10 hover:bg-electric-cyan/20 border border-electric-cyan/30 rounded-xl text-electric-cyan font-medium transition-all duration-200 group"
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
              View Full Chart
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
            </a>
            
            <a
              href={siteContent.social.dexLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-plasma-magenta/10 hover:bg-plasma-magenta/20 border border-plasma-magenta/30 rounded-xl text-plasma-magenta font-medium transition-all duration-200 group"
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
              Trade Now
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
