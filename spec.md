Ark

Purpose:
A compact, developer-ready specification for the 24–72 hour MVP/PWA of the Life Vault + AI clone project (hackathon-ready). This doc defines requirements, architecture, data handling, and testing so developers can implement immediately.

1. High-level Overview

A Progressive Web App (PWA) that lets users dump all kinds of content — notes, screenshots, images, short videos, and links — into a smart vault.
The app uses AI to automatically classify and organize that content (like Notes / Media / Tasks).
On top of that, each user can chat with their AI Twin — an assistant contextualized with their vault data.
A shareable twin link lets others interact with that AI twin for demos or social use.

Primary goals (MVP):

Upload arbitrary content to Convex storage.

Auto-classify (Notes / Media / Tasks) using Vercel AI SDK.

Provide a chat UI for the AI Twin with RAG (Retrieval-Augmented Generation) using stored embeddings.

Generate shareable twin link https://app/ark/:id with limited demo access.

Auth via BetterAuth, deployed on Vercel using Next.js + next-pwa.

Non-goals (MVP):

Full-scale privacy/compliance (HIPAA/GDPR), enterprise SSO, detailed analytics dashboards.

2. Tech Stack (MVP)
Layer	Technology
Frontend	Next.js (TypeScript) + Tailwind + next-pwa for PWA support
Backend	Vercel Serverless Functions + Convex for data logic & real-time updates
Database / Storage	Convex (native storage & document model)
Auth	BetterAuth (custom auth integration into Convex functions)
AI	Vercel AI SDK for chat, classification, and embedding generation
Deployment	Vercel (CI/CD auto-deploy)
CI/CD	GitHub Actions (optional) + Vercel auto builds
3. Minimal Feature Set & User Flows
3.1 User Flows (MVP)
1. Sign up / Sign in

Auth handled by BetterAuth.

On first sign-in, user is automatically provisioned with an empty vault in Convex (users and vault_items).

2. Upload Content

User clicks “Add” → selects text, image, or video.

File is uploaded to Convex storage.

A vault_items record is created with metadata:

{
  id: string,
  userId: string,
  type: 'note' | 'image' | 'video' | 'link',
  contentUrl?: string, // if file
  text?: string, // extracted text or note body
  createdAt: Date,
  tags?: string[],
  summary?: string
}

3. Auto-classify

After upload, serverless function calls Vercel AI SDK classification endpoint.

The function updates the vault_items entry with:

category (Notes, Media, Tasks, Links)

summary

tags[]

4. Index / Embed

For text content, store directly in embeddings table.

For media, use OCR or transcription (if time allows) before embedding.

Embeddings stored in Convex as vectors:

{
  id: string,
  itemId: string,
  userId: string,
  embedding: number[],
  text: string
}

5. Chat with twin

User opens chat page.

Chat API route in Next.js calls Convex function:

Fetch top-K embeddings for query.

Build context prompt.

Call Vercel AI SDK chat model.

Return AI reply to frontend.

Messages (user + AI) are logged to a chats table for continuity.

6. Share Link

User clicks “Share My Twin” → generate a temporary token in Convex.

Public twin route (/twin/:id) allows limited chat access via that token (read-only RAG context).

Token expires after 24h or X messages. 

3.2 Admin / Demo Flows

Demo mode: single “demo” user preloaded with fake content.

Share links expire automatically after 24h or N messages.

Optional rate limiting (Convex function-level throttling).

4. Data Model (Convex)
Collection	Purpose	Key Fields
users	User profiles	id, email, name, authProvider
vault_items	All user content	id, userId, type, contentUrl, text, category, tags[], summary, createdAt
embeddings	Vector data for retrieval	id, itemId, userId, embedding, text
chats	Chat logs	id, userId, messages[], createdAt
share_tokens	Temporary demo links	id, userId, token, expiresAt, limit