# Clankess (CLESS) - Crypto Token Landing Page

A fast, modern, responsive landing page for the Clankess crypto token built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Sleek, minimal, premium design with dark mode
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for Core Web Vitals and blazing fast loading
- **SEO Optimized**: Complete metadata, Open Graph, and JSON-LD schema
- **Interactive**: Smooth animations, hover effects, and micro-interactions
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom brand colors
- **Typography**: Inter and JetBrains Mono fonts
- **Icons**: Custom SVG icons
- **Deployment**: Optimized for Vercel deployment

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata and SEO
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable React components
│   │   ├── Navbar.tsx          # Navigation with smooth scroll
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── ContractInfo.tsx    # Token contract information
│   │   ├── Social.tsx          # Social media links
│   │   ├── Chart.tsx           # Dexscreener chart embed
│   │   ├── About.tsx           # About section with features
│   │   ├── HowToBuy.tsx        # Step-by-step buying guide
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Button.tsx          # Reusable button component
│   │   └── CopyToClipboard.tsx # Copy functionality
│   └── lib/
│       └── content.ts          # All site content (EDIT THIS FILE)
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration with brand colors
└── README.md                   # This file
```

## 🎨 Brand Colors

- **Graphite**: `#121416` - Primary background
- **Electric Cyan**: `#00D1FF` - Primary accent
- **Plasma Magenta**: `#FF2FB3` - Secondary accent
- **Soft Gray**: `#9AA3A7` - Text and borders
- **White**: `#FFFFFF` - Primary text

## ⚙️ Quick Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Update content** (see Content Management section below)

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Content Management

All site content is managed through the `src/lib/content.ts` file. This makes it easy for non-developers to update information without touching the code.

### 🔧 Essential Updates Required

Before deploying, update these critical values in `src/lib/content.ts`:

#### 1. Contract Information
```typescript
contract: {
  address: "0xYOUR_ACTUAL_CONTRACT_ADDRESS", // ⚠️ UPDATE THIS
  decimals: 18,
  chainSlug: "plasma", // ⚠️ UPDATE FOR DEXSCREENER
  pairAddress: "0xYOUR_ACTUAL_PAIR_ADDRESS", // ⚠️ UPDATE THIS
},
```

#### 2. Social Links
```typescript
social: {
  twitter: "https://x.com/your_actual_handle", // ⚠️ UPDATE THIS
  telegram: "https://t.me/your_actual_channel", // ⚠️ UPDATE THIS
  dexLink: "https://dexscreener.com/CHAIN/PAIR", // ⚠️ UPDATE THIS
},
```

#### 3. Site Information
```typescript
site: {
  url: "https://your-actual-domain.com", // ⚠️ UPDATE THIS
  // ... other fields
},
```

#### 4. Token Details
```typescript
tokenDetails: {
  supply: "1,000,000,000", // ⚠️ UPDATE WITH ACTUAL SUPPLY
  lpLocked: "100%", // ⚠️ UPDATE WITH ACTUAL LP STATUS
  ownership: "Renounced", // ⚠️ UPDATE WITH ACTUAL STATUS
  audit: "Pending", // ⚠️ UPDATE WITH ACTUAL AUDIT STATUS
  tax: "0/0", // ⚠️ UPDATE WITH ACTUAL TAX INFO
},
```

### 📊 Dexscreener Chart Setup

To display the live chart:

1. Go to [dexscreener.com](https://dexscreener.com)
2. Search for your token
3. Find your trading pair
4. Copy the chain slug and pair address from the URL
5. Update in `content.ts`:
   ```typescript
   contract: {
     chainSlug: "plasma", // e.g., "ethereum", "bsc", "polygon"
     pairAddress: "0xYOUR_PAIR_ADDRESS",
   },
   ```

### 🎯 Other Customizable Content

- **Navigation**: Update menu items
- **Hero Section**: Modify headline and subtitle
- **About Section**: Edit description and features
- **How to Buy**: Customize steps
- **FAQ**: Add/remove questions and answers
- **Token Details**: Update all token information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `out` folder to your hosting provider

## 🔍 SEO & Performance

The site includes:

- **Complete Metadata**: Title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific metadata
- **JSON-LD Schema**: Structured data for search engines
- **Sitemap**: `public/sitemap.xml`
- **Robots.txt**: `public/robots.txt`
- **Performance**: Optimized images, lazy loading, minimal JavaScript

## 🎨 Customization

### Colors
Update brand colors in `tailwind.config.ts`:

```typescript
colors: {
  "your-color": "#HEX_CODE",
}
```

### Fonts
Change fonts in `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

### Components
All components are in `src/components/` and can be customized as needed.

## 📱 Mobile Optimization

The site is built mobile-first with:
- Responsive grid layouts
- Touch-friendly buttons
- Optimized typography scaling
- Mobile-specific interactions

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

## 🐛 Troubleshooting

### Chart Not Loading
- Verify `chainSlug` and `pairAddress` in `content.ts`
- Check if the pair exists on Dexscreener
- Ensure the chain is supported

### Styling Issues
- Clear browser cache
- Rebuild the project: `npm run build`
- Check Tailwind configuration

### Performance Issues
- Optimize images in `public/` folder
- Check for unused dependencies
- Use Next.js Image component for images

## 📞 Support

For technical support or questions:
- Check the FAQ section on the website
- Join the Telegram community
- Follow on X for updates

## 📄 License

This project is open source and available under the MIT License.

---

**⚠️ Important**: Remember to update all placeholder content in `src/lib/content.ts` before deploying to production!
