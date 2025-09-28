"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About Clankess</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p
              className={`text-lg text-soft-gray leading-relaxed transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Clankess is a meme coin created from the merge of Clanker and Plasma communities. Our goal is to unite holders, build trust, and have fun together. Clankess is powered by the community, open to everyone, and focused on positive vibes.
            </p>
            <p
              className={`text-lg text-soft-gray leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              We believe in transparency, inclusivity, and growing together. Whether you were part of Clanker, Plasma, or are new to the space, Clankess welcomes you to join our journey and help shape the future of our meme coin.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/*
            {
              icon: "🤝",
              title: "Merged Community",
              description:
                "Clankess unites Clanker and Plasma holders into one big meme family. If you were part of either, you’re home here.",
            },
            {
              icon: "🪙",
              title: "Just a Meme Coin",
              description:
                "No utility, no roadmap, no promises. Clankess is for fun, memes, and good vibes only.",
            },
            {
              icon: "🎉",
              title: "Community-Driven",
              description:
                "Everything is decided by the community. There’s no team, no leaders—just meme lovers.",
            },
          */}
          { [
            {
              icon: "🤝",
              title: "Merged Community",
              description:
                "Clankess brings together Clanker and Plasma holders into one united, trusted meme coin family.",
            },
            {
              icon: "🪙",
              title: "Meme Coin Spirit",
              description:
                "Fun, memes, and community vibes are at the heart of Clankess. We celebrate creativity and togetherness.",
            },
            {
              icon: "🎉",
              title: "Community-Driven",
              description:
                "Decisions are made by the community. Everyone’s voice matters in Clankess.",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-soft-gray/20 hover:border-electric-cyan/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-plasma-magenta/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan/20 to-plasma-magenta/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-soft-gray leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-cyan to-plasma-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-plasma-magenta to-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-soft-gray/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Why Choose Clankess?</h3>
            <p className="text-soft-gray">For the memes, for the fun, for the community.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-cyan mb-2">😂</div>
              <div className="text-2xl font-bold text-white mb-1">Meme Power</div>
              <div className="text-sm text-soft-gray">All about jokes and laughter</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-magenta mb-2">🌐</div>
              <div className="text-2xl font-bold text-white mb-1">Merged</div>
              <div className="text-sm text-soft-gray">Clanker + Plasma</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-cyan mb-2">👥</div>
              <div className="text-2xl font-bold text-white mb-1">Community</div>
              <div className="text-sm text-soft-gray">Everyone’s welcome</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-magenta mb-2">🚫</div>
              <div className="text-2xl font-bold text-white mb-1">No Utility</div>
              <div className="text-sm text-soft-gray">Just for fun</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-electric-cyan/10 to-plasma-magenta/10 backdrop-blur-sm rounded-3xl p-8 border border-electric-cyan/20">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-soft-gray leading-relaxed">
              To unite and empower the Clankess community, build trust, and keep the meme spirit alive. Join us to create, share, and grow together!
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-plasma-magenta rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
