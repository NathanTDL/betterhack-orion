# Ark - Your Personal Life Vault

A Progressive Web App (PWA) that lets users capture all kinds of content—notes, screenshots, images, videos, and links—into a smart vault. The app uses AI to automatically classify and organize content, and provides an AI Twin for contextual chat.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Font**: Inter (modern SaaS standard)
- **UI Components**: shadcn/ui with Lucide icons
- **Backend**: Convex (planned)
- **Auth**: BetterAuth (planned)
- **AI**: Vercel AI SDK (planned)
- **Deployment**: Vercel

## 🎨 Design Philosophy

The landing page follows modern SaaS design patterns:
- Clean, minimal interface with Inter font
- Gradient accents for key branding elements
- Sticky navigation with backdrop blur
- Responsive mobile-first design
- shadcn/ui components for consistency
- Lucide icons for visual clarity

## 🏃 Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with Inter font
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles + shadcn theme
├── components/
│   └── ui/              # shadcn/ui components
└── lib/
    └── utils.ts         # Utility functions
```

## 🎯 MVP Features (Planned)

1. **Upload Content** - Notes, images, videos, links
2. **Auto-classify** - AI categorization (Notes/Media/Tasks/Links)
3. **AI Twin Chat** - RAG-powered assistant
4. **Share Link** - Public twin demo access
5. **PWA Support** - Offline-first with next-pwa

## 📝 Next Steps

- [ ] Set up Convex backend
- [ ] Implement BetterAuth authentication
- [ ] Build upload/vault interface
- [ ] Integrate Vercel AI SDK
- [ ] Add PWA manifest and service worker
- [ ] Deploy to Vercel

## 🏗️ Built for Hackathon

This project is optimized for rapid development in a 24-72 hour hackathon timeframe.
