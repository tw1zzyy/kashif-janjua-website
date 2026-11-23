# Kashif Janjua — Premium Bilingual Personal Website

A premium, bilingual (English / Czech) personal website and digital publication platform built for theologian and religious scholar Kashif Janjua. Styled with a sophisticated theological/editorial aesthetic (ivory backgrounds, serif typography, clean spacious layouts) and fully manageable via Sanity CMS.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation / SSR)
- **CMS:** [Sanity CMS](https://www.sanity.io/) (Document-level localization)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & `@tailwindcss/typography` (`prose`)
- **Rich Text:** `astro-portabletext`

---

## Features

- **Bilingual Architecture:** Seamless localization routing (`/en/...` and `/cs/...`) with root language redirection.
- **Sanity CMS Integration:** Manage content, biographies, articles, books, upcoming events, and news in both English and Czech.
- **Book Downloads & Library:** Showcase books with cover art, publication details, and direct PDF/eBook download capabilities.
- **Interactive Event Maps:** Event listings and details with direct links to Google Maps for venue locations.
- **Responsive Design:** Fully optimized mobile navigation and typography scaling.

---

## Project Structure

```text
src/
├── assets/          # Static assets
├── components/      # UI components (Header, Footer, ContactForm, SanityImage)
├── layouts/         # Base layout wrapper (Layout.astro)
├── pages/
│   ├── index.astro  # Root redirect to /en
│   └── [lang]/      # Localized routes (en, cs)
│       ├── index.astro
│       ├── [...slug].astro  # Dynamic routing for books, articles, events, news
│       ├── articles.astro
│       ├── books.astro
│       ├── events.astro
│       ├── news.astro
│       └── contact.astro
└── sanity/          # Sanity client, queries, and schemas
```

---

## Getting Started

### 1. Prerequisites
Ensure you have **Node.js** installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file at the root of the project with your Sanity project credentials:
```env
SANITY_PROJECT_ID=u8fsr2eu
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_READ_TOKEN=your_sanity_read_token
```

### 4. Run Development Server (Website)
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 5. Run Sanity Studio (CMS Admin Panel)
```bash
npm run sanity
```
Open [http://localhost:3333](http://localhost:3333) to manage and publish your content.

---

## Build & Production

To build the static site for production:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```
