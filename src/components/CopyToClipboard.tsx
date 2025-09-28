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
        // Simple toast notification
        const toast = document.createElement("div");
        toast.className = "fixed top-4 right-4 bg-electric-cyan text-graphite px-4 py-2 rounded-xl font-medium z-50 animate-slide-up";
        toast.textContent = "Copied to clipboard!";
        document.body.appendChild(toast);
        
        setTimeout(() => {
          toast.remove();
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
      className={`transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:ring-opacity-50 ${className}`}
      aria-label={`Copy ${text} to clipboard`}
    >
      {children}
      {copied && (
        <span className="ml-2 text-electric-cyan text-sm font-medium">
          ✓ Copied!
        </span>
      )}
    </button>
  );
}
