# Nicole Wang — Personal Portfolio

A scroll-driven personal portfolio built with Next.js (App Router), Tailwind CSS, Framer Motion, and Lenis.

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to edit content

### Projects
All project data lives in [`data/projects.ts`](data/projects.ts). Each entry has:
- `slug` — URL key (e.g. `nasa` → `/work/nasa`)
- `title`, `shortTitle`, `role`, `year`, `oneLiner` — dock and detail page text
- `thumbBg` — CSS gradient for the dock card thumbnail
- `accent` — accent color for the detail page hero
- `overview`, `goals`, `contributions`, `results`, `tools` — case study sections

Edit those strings directly. To add a project, append a new object following the same shape.

### Swapping images
Project thumbnails and gallery images use placeholder backgrounds. To swap in real images:
1. Drop your images into `/public/images/` (e.g. `/public/images/nasa-hero.jpg`)
2. In the detail page (`components/ProjectDetail.tsx`), replace the placeholder `<div>` with:
   ```tsx
   import Image from "next/image";
   <Image src="/images/nasa-hero.jpg" alt="NASA project" fill className="object-cover rounded-[14px]" />
   ```
3. Add a `gallery: ["/images/nasa-1.jpg", ...]` array to the project in `data/projects.ts`

### Portrait photo
In `components/About.tsx`, replace the `portrait photo` placeholder text with:
```tsx
import Image from "next/image";
<Image src="/images/portrait.jpg" alt="Nicole Wang" fill className="object-cover rounded-lg" />
```

### Resume PDF
`/public/Nicole_Wang_Resume.pdf` is already in place. To update it, just overwrite that file.

### Social links
In `components/Footer.tsx`, update the `SOCIAL_LINKS` array (GitHub and Instagram URLs have `[MY_GITHUB]`/`[MY_INSTAGRAM]` placeholders).

---

## Setting up the contact form email

The contact form posts to `/api/contact` which sends via **Resend**.

1. Sign up at [resend.com](https://resend.com) (free tier sends up to 3,000 emails/month)
2. Create an API key in your Resend dashboard
3. Add it to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
4. **Verify your sending domain** in Resend so emails don't land in spam.  
   Until your domain is verified, change the `from` field in `app/api/contact/route.ts` to use `onboarding@resend.dev` (already set as the default).

> **Without a Resend key:** the API route logs the message to the server console and returns success, so the form still works locally for testing.

---

## Deployment to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. In **Project Settings → Environment Variables**, add `RESEND_API_KEY` with your key.
4. Deploy. Vercel gives you a `.vercel.app` URL immediately.

### Custom domain
5. In Vercel project → **Domains**, add your domain (e.g. `nicolewang.me`).
6. Follow the DNS instructions Vercel shows (usually an A record + CNAME at your registrar).
7. Vercel auto-provisions an SSL certificate.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework, routing, API route |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility styling + palette tokens |
| Framer Motion | Scroll reveals, dock magnification, grow-on-scroll motif |
| Lenis | Smooth eased scrolling site-wide |
| Resend | Transactional email for contact form |
| Google Fonts (next/font) | Fraunces (display serif) + Hanken Grotesk (body) |
