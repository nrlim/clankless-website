"use client";

import CopyToClipboard from "./CopyToClipboard";
import { siteContent } from "@/lib/content";

export default function ContractInfo() {
  return (
    <section id="token" className="py-16 bg-graphite scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-soft-gray/20 shadow-soft-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Token Information</h2>
              <div className="inline-flex items-center px-4 py-2 bg-electric-cyan/10 rounded-xl border border-electric-cyan/30">
                <span className="text-electric-cyan font-medium">{siteContent.site.chain}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contract Address */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-soft-gray">Contract Address</label>
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
                    </div>
                  </div>
                </CopyToClipboard>
              </div>

              {/* Ticker */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-soft-gray">Ticker</label>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-soft-gray/20">
                  <span className="text-white font-bold text-lg">{siteContent.site.ticker}</span>
                </div>
              </div>

              {/* Decimals */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-soft-gray">Decimals</label>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-soft-gray/20">
                  <span className="text-white font-medium">{siteContent.contract.decimals}</span>
                </div>
              </div>

              {/* Chain */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-soft-gray">Network</label>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-soft-gray/20">
                  <span className="text-white font-medium">{siteContent.site.chain}</span>
                </div>
              </div>
            </div>

            {/* Token Stats */}
            <div className="mt-8 pt-8 border-t border-soft-gray/20">
              <h3 className="text-lg font-semibold text-white mb-6 text-center">Token Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-cyan">{siteContent.tokenDetails.supply}</div>
                  <div className="text-xs text-soft-gray mt-1">Total Supply</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-plasma-magenta">{siteContent.tokenDetails.lpLocked}</div>
                  <div className="text-xs text-soft-gray mt-1">LP Locked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-cyan">{siteContent.tokenDetails.ownership}</div>
                  <div className="text-xs text-soft-gray mt-1">Ownership</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-plasma-magenta">{siteContent.tokenDetails.audit}</div>
                  <div className="text-xs text-soft-gray mt-1">Audit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-cyan">{siteContent.tokenDetails.tax}</div>
                  <div className="text-xs text-soft-gray mt-1">Buy/Sell Tax</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CopyToClipboard text={siteContent.contract.address}>
                <div className="inline-flex items-center justify-center px-6 py-3 bg-electric-cyan/10 hover:bg-electric-cyan/20 border border-electric-cyan/30 rounded-xl text-electric-cyan font-medium transition-all duration-200 cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-2"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Contract
                </div>
              </CopyToClipboard>

              <a
                href={siteContent.social.dexLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-plasma-magenta/10 hover:bg-plasma-magenta/20 border border-plasma-magenta/30 rounded-xl text-plasma-magenta font-medium transition-all duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mr-2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                View on DEX
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
