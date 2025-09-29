"use client";

import { useState } from "react";

interface CopyToClipboardProps {
  text: string;
  children: React.ReactNode;
  className?: string;
  showToast?: boolean;
}

export default function CopyToClipboard({
  text,
  children,
  className = "",
  showToast = true,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (showToast) {
        // Improved toast notification
        const toast = document.createElement("div");
        toast.className =
          "fixed top-6 right-6 bg-gradient-to-r from-electric-cyan to-plasma-magenta text-white px-6 py-3 rounded-2xl shadow-lg font-semibold z-50 flex items-center space-x-2 animate-slide-up";
        toast.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
      <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 10l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    <span>Copied to clipboard!</span>
  `;
        document.body.appendChild(toast);

        setTimeout(() => {
          toast.classList.add("opacity-0");
          setTimeout(() => toast.remove(), 300);
        }, 2000);
      }

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`transition-all duration-200 hover:scale-105 ${className}`}
      aria-label={`Copy ${text} to clipboard`}
    >
      {children}
      {copied}
    </button>
  );
}
