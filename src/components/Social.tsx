"use client";

import { siteContent } from "@/lib/content";

export default function Social() {
  return (
    <section id="community" className="py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Community</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Connect with fellow holders, get the latest updates, and be part of the Clankess movement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Twitter/X */}
            <a
              href={siteContent.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-soft-gray/20 hover:border-electric-cyan/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-electric-cyan/10 rounded-2xl flex items-center justify-center group-hover:bg-electric-cyan/20 transition-colors duration-300">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-electric-cyan"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  
                  <div className="text-electric-cyan group-hover:translate-x-1 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Follow on X</h3>
                <p className="text-soft-gray mb-6">
                  Get real-time updates, announcements, and engage with the community on X (formerly Twitter).
                </p>
                
                <div className="flex items-center text-electric-cyan font-medium">
                  <span>@yourhandle</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Telegram */}
            <a
              href={siteContent.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-soft-gray/20 hover:border-plasma-magenta/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-plasma-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-plasma-magenta/10 rounded-2xl flex items-center justify-center group-hover:bg-plasma-magenta/20 transition-colors duration-300">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-plasma-magenta"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  
                  <div className="text-plasma-magenta group-hover:translate-x-1 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Join Telegram</h3>
                <p className="text-soft-gray mb-6">
                  Connect with the community, get support, and participate in discussions on our Telegram channel.
                </p>
                
                <div className="flex items-center text-plasma-magenta font-medium">
                  <span>t.me/yourchannel</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Newsletter Signup (Optional) */}
          <div className="mt-12 text-center">
            <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-soft-gray/20">
              <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-sm text-soft-gray mb-4">
                Get notified about important updates and announcements.
              </p>
              
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-900/50 border border-soft-gray/20 rounded-xl text-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-electric-cyan text-graphite font-medium rounded-xl hover:bg-electric-cyan/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-soft-gray mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
