"use client";

import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-soft-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-electric-cyan"
              >
                <path
                  d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-2xl font-bold text-white">Clankess</span>
            </Link>
            
            <p className="text-soft-gray mb-6 max-w-md leading-relaxed">
              {siteContent.site.description}
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href={siteContent.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-electric-cyan/20 rounded-xl flex items-center justify-center text-soft-gray hover:text-electric-cyan transition-all duration-200"
                aria-label="Follow on X"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              
              <a
                href={siteContent.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-plasma-magenta/20 rounded-xl flex items-center justify-center text-soft-gray hover:text-plasma-magenta transition-all duration-200"
                aria-label="Join Telegram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {siteContent.navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-soft-gray hover:text-electric-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteContent.social.dexLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gray hover:text-electric-cyan transition-colors duration-200 text-sm"
                >
                  Trade CLESS
                </a>
              </li>
              <li>
                <a
                  href={`https://dexscreener.com/${siteContent.contract.chainSlug}/${siteContent.contract.pairAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-gray hover:text-electric-cyan transition-colors duration-200 text-sm"
                >
                  Chart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-soft-gray hover:text-electric-cyan transition-colors duration-200 text-sm"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-soft-gray hover:text-electric-cyan transition-colors duration-200 text-sm"
                >
                  Audit Report
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Token Info Bar */}
        <div className="mt-12 pt-8 border-t border-soft-gray/20">
          <div className="bg-gray-800/50 rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xs text-soft-gray mb-1">Contract</div>
                <div className="text-white font-mono text-xs truncate">
                  {siteContent.contract.address}
                </div>
              </div>
              <div>
                <div className="text-xs text-soft-gray mb-1">Chain</div>
                <div className="text-electric-cyan font-medium text-sm">
                  {siteContent.site.chain}
                </div>
              </div>
              <div>
                <div className="text-xs text-soft-gray mb-1">Ticker</div>
                <div className="text-plasma-magenta font-bold text-sm">
                  {siteContent.site.ticker}
                </div>
              </div>
              <div>
                <div className="text-xs text-soft-gray mb-1">Decimals</div>
                <div className="text-white font-medium text-sm">
                  {siteContent.contract.decimals}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-soft-gray/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-soft-gray text-sm">
            {siteContent.footer.copyright}
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-soft-gray hover:text-electric-cyan transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-soft-gray hover:text-electric-cyan transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-plasma-magenta/5 border border-plasma-magenta/20 rounded-xl">
          <p className="text-xs text-soft-gray text-center leading-relaxed">
            {siteContent.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
