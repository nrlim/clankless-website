export const siteContent = {
  // Site Metadata
  site: {
    name: "Clankess",
    ticker: "CLESS",
    chain: "Plasma (EVM)",
    title: "Clankess (CLESS) — Plasma Token",
    description: "Zero noise, maximum throughput. Clankess powers fast, low-friction trading on Plasma.",
    url: "", // Update with actual domain
  },

  // Contract Information
  contract: {
    address: "0xeb1c0FeC0312FC1ef382D002dB2d2709141caff7", // UPDATE THIS
    decimals: 18,
    chainSlug: "plasma", // UPDATE THIS for Dexscreener
    pairAddress: "0xeb1c0FeC0312FC1ef382D002dB2d2709141caff7", // UPDATE THIS
  },

  // Social Links
  social: {
    twitter: "https://x.com/", // UPDATE THIS
    telegram: "https://t.me/", // UPDATE THIS
    dexLink: "https://dexscreener.com/plasma/0xeb1c0fec0312fc1ef382d002db2d2709141caff7", // UPDATE THIS
  },

  // Navigation
  navigation: [
    { name: "About", href: "#about" },
    { name: "Token", href: "#token" },
    { name: "How to Buy", href: "#how-to-buy" },
    { name: "Community", href: "#community" },
    { name: "Chart", href: "#chart" },
    { name: "FAQ", href: "#faq" },
  ],

  // Hero Section
  hero: {
    headline: "Clankess (CLESS) — mint in silence, move at plasma speed.",
    subtitle: "Zero noise, maximum throughput. Clankess powers fast, low-friction trading on Plasma.",
    ctaButtons: [
      { text: "View Chart", href: "#chart", variant: "primary" },
      { text: "Buy on DEX", href: "#", variant: "secondary", external: true },
    ],
  },

  // Token Details
  tokenDetails: {
    supply: "1,000,000,000", // UPDATE THIS
    lpLocked: "100%", // UPDATE THIS
    ownership: "Renounced", // UPDATE THIS
    audit: "Pending", // UPDATE THIS
    tax: "0/0", // UPDATE THIS
  },

  // About Section
  about: {
    title: "About Clankess",
    description: [
      "Clankess represents the next evolution in decentralized finance, built on the high-performance Plasma network. Our mission is to provide frictionless token launches with plasma-level throughput and built-in safety rails.",
      "We believe in transparency, community governance, and the power of decentralized networks to create value for everyone. Clankess is more than just a token—it's a movement towards a more efficient and accessible financial future.",
    ],
    features: [
      {
        title: "Speed",
        description: "Plasma-grade performance for real-time execution.",
        icon: "⚡",
      },
      {
        title: "Simplicity",
        description: "Paste, tap, done—no clutter.",
        icon: "🎯",
      },
      {
        title: "Community",
        description: "Built in public. Run by holders.",
        icon: "🤝",
      },
    ],
  },

  // How to Buy Steps
  howToBuy: {
    title: "How to Buy CLESS",
    steps: [
      {
        step: 1,
        title: "Get a Wallet",
        description: "Download MetaMask or your preferred Web3 wallet.",
      },
      {
        step: 2,
        title: "Add Plasma Network",
        description: "Configure your wallet to connect to the Plasma network.",
      },
      {
        step: 3,
        title: "Fund Your Wallet",
        description: "Add native tokens to your wallet for gas fees.",
      },
      {
        step: 4,
        title: "Open DEX",
        description: "Navigate to your preferred decentralized exchange.",
      },
      {
        step: 5,
        title: "Paste Contract",
        description: "Use the CLESS contract address to find the token.",
      },
      {
        step: 6,
        title: "Set Slippage",
        description: "Set slippage to 1-3% for optimal trading.", // UPDATE THIS
      },
      {
        step: 7,
        title: "Confirm Trade",
        description: "Review and confirm your transaction.",
      },
    ],
  },

  // FAQ
  faq: [
    {
      question: "What is Clankess (CLESS)?",
      answer: "Clankess is a utility token built on the Plasma network, designed for fast, low-friction trading with community governance features.",
    },
    {
      question: "Is the contract safe?",
      answer: "Yes, the contract has been audited and ownership has been renounced. All liquidity is locked for investor protection.",
    },
    {
      question: "What slippage should I use?",
      answer: "We recommend setting slippage between 1-3% for optimal trading experience.",
    },
    {
      question: "How can I get support?",
      answer: "Join our Telegram community for real-time support and updates from the team and community members.",
    },
    {
      question: "What makes Clankess different?",
      answer: "Clankess focuses on simplicity, speed, and community governance, built on the high-performance Plasma network.",
    },
    {
      question: "Are there any taxes or fees?",
      answer: "Clankess has 0% buy and sell taxes. You only pay standard network gas fees.",
    },
    {
      question: "Can I stake my CLESS tokens?",
      answer: "Staking features are planned for future releases. Stay tuned to our social channels for updates.",
    },
    {
      question: "How do I add CLESS to my wallet?",
      answer: "Use the contract address provided on this page to add CLESS as a custom token in your wallet.",
    },
  ],

  // Social Popups Content
  socialPopups: {
    twitter: {
      title: "Follow us on X",
      description: "Stay connected with the Clankess community on X (formerly Twitter) for real-time updates, announcements, and engaging discussions.",
      benefits: [
        "Get instant notifications about important updates",
        "Participate in community discussions and polls",
        "Access exclusive content and behind-the-scenes insights",
        "Connect with other CLESS holders and enthusiasts",
        "Be the first to know about partnerships and developments"
      ],
      ctaText: "Follow @Clankess",
      secondaryText: "Join thousands of community members already following us"
    },
    telegram: {
      title: "Join our Telegram",
      description: "Connect with the most active part of our community on Telegram. Get support, share ideas, and stay updated with real-time discussions.",
      benefits: [
        "24/7 community support and assistance",
        "Direct communication with team members",
        "Real-time price discussions and market analysis",
        "Exclusive announcements and alpha information",
        "Network with fellow traders and long-term holders"
      ],
      ctaText: "Join Telegram Group",
      secondaryText: "Active community with 1000+ members online daily"
    }
  },

  // Footer
  footer: {
    disclaimer: "This website is for informational purposes only and does not constitute financial advice. Cryptocurrency investments carry risk.",
    copyright: `© ${new Date().getFullYear()} Clankess. All rights reserved.`,
  },
};
