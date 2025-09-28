"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { siteContent } from "@/lib/content";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-graphite via-graphite to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plasma-magenta/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">{siteContent.site.name}</span>
                <span className="block text-electric-cyan">({siteContent.site.ticker})</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-soft-gray font-normal mt-2">
                  mint in silence, move at plasma speed.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-soft-gray max-w-2xl leading-relaxed">
                {siteContent.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#chart")}
                variant="primary"
                size="lg"
                className="group"
              >
                <span>View Chart</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Button>
              
              <Button
                href={siteContent.social.dexLink}
                external
                variant="secondary"
                size="lg"
                className="group"
              >
                <span>Buy on DEX</span>
                <svg
                  width="20"
                  height="20"
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
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-electric-cyan/30 animate-spin" style={{ animationDuration: "20s" }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-electric-cyan rounded-full shadow-glow"></div>
                </div>
                
                {/* Middle Ring */}
                <div className="absolute inset-4 rounded-full border-2 border-plasma-magenta/40 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-plasma-magenta rounded-full shadow-glow-magenta"></div>
                </div>
                
                {/* Inner Circle - Coin */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-electric-cyan/20 to-plasma-magenta/20 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">CLESS</div>
                    <div className="text-sm text-soft-gray">Plasma Network</div>
                  </div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-electric-cyan rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-plasma-magenta rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
                <div className="absolute top-1/2 -right-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-cyan/10 to-plasma-magenta/10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-soft-gray"
        >
          <path d="M7 13l3 3 7-7" />
          <path d="M12 17V3" />
        </svg>
      </div>
    </section>
  );
}
