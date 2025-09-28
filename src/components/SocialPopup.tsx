"use client";

import { siteContent } from "@/lib/content";

interface SocialPopupProps {
  platform: "twitter" | "telegram";
}

export default function SocialPopup({ platform }: SocialPopupProps) {
  const isTwitter = platform === "twitter";

  return (
    <div className="text-center">
      {/* Platform Icon */}
      <div className={`
        w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center
        ${isTwitter 
          ? "bg-electric-cyan/10 text-electric-cyan" 
          : "bg-plasma-magenta/10 text-plasma-magenta"
        }
      `}>
        {isTwitter ? (
          // Twitter/X Icon
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        ) : (
          // Telegram Icon
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        )}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {isTwitter ? "X Channel Launching Soon" : "Telegram Launching Soon"}
      </h3>

      {/* Description */}
      <p className="text-soft-gray mb-6 leading-relaxed">
        Our {isTwitter ? "X (Twitter)" : "Telegram"} community channel is not live yet. Please check back soon for updates!
      </p>

      {/* Benefits List */}
      <div className="mb-8">
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-soft-gray">
            <div className={`
              w-2 h-2 rounded-full mr-3 flex-shrink-0
              ${isTwitter ? "bg-electric-cyan" : "bg-plasma-magenta"}
            `} />
            Launching soon. Stay tuned!
          </li>
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <button
          disabled
          className={`
            w-full inline-flex items-center justify-center px-6 py-3 rounded-xl
            font-medium transition-all duration-200 opacity-60 cursor-not-allowed
            ${isTwitter 
              ? "bg-electric-cyan text-graphite" 
              : "bg-plasma-magenta text-white"
            }
          `}
        >
          <span className="mr-2">Coming Soon</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15,3 21,3 21,9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </button>

        {/* Secondary info */}
        <p className="text-xs text-soft-gray">
          Community launch is coming soon.
        </p>
      </div>
    </div>
  );
}
