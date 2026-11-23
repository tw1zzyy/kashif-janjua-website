# MASTER PROMPT — Premium Biography Website
## Astro + Sanity CMS | Claude Code

### 1. Project Overview

Act as a senior full-stack developer, software architect, UI/UX designer, and Sanity CMS specialist.

Your task is to design and develop a modern, premium-quality personal website for a religious figure and theologian.

The website must serve as a professional digital presence where visitors can learn about the person's life, biography, theological work, activities, publications, books, events, interviews, and latest news.

The website must be visually impressive, professional, accessible, fast, and easy to maintain.

**The most important requirement:** The website owner has no programming knowledge. They must be able to manage all website content independently through a simple and intuitive Sanity Studio interface without editing code.

### 2. Technology Stack

Use the following technologies:

- **Astro** — frontend framework.
- **TypeScript** — type safety.
- **Tailwind CSS** — styling.
- **Sanity** — headless CMS and content management.
- **Sanity Studio** — administrative interface.
- **GROQ** — content queries.
- **Lucide Icons** — interface icons.

Use current stable, mutually compatible versions. Consult official documentation when necessary rather than relying on outdated APIs.

Architecture requirements:
- Astro should use static generation where appropriate.
- Sanity should provide all editable website content.
- Keep frontend and CMS architecture clearly separated.
- Use reusable, maintainable components.
- Avoid unnecessary dependencies and overengineering.
- Use environment variables for API credentials and configuration.
- Never expose private Sanity tokens in client-side code.

### 3. Website Design and Visual Identity

**Design direction: Professional / Premium.**

The website should communicate authority, knowledge, credibility, professionalism, and elegance.

Visual characteristics:
- Elegant and sophisticated design.
- Strong typography and clear visual hierarchy.
- Large, high-quality editorial photography.
- Generous whitespace.
- Refined layouts and balanced proportions.
- Subtle animations and transitions.
- Professional navigation.
- Carefully selected accent colors.
- Consistent design system across all pages.

Suggested visual direction:
- Deep navy, charcoal, warm white, or ivory.
- Restrained gold, bronze, or another elegant accent color.
- Modern serif typography for important headings.
- Clean sans-serif typography for body text.

Do not make the website look like a generic corporate template, ordinary blog, or basic religious organization website.

Use the following websites as visual and structural inspiration:

- https://www.shmuley.com/
- https://newislamicdirections.com/

Analyze their layout, content organization, navigation, and presentation. Take inspiration from their strengths, but do not copy their design or source code.

Create an original visual identity appropriate for a respected theologian and religious figure.

### 4. Website Languages

The website must support two complete languages:

- English (EN)
- Czech (CS)

Requirements:
- Add a language switcher in the navigation.
- Every relevant page and content entry must support both languages.
- Use proper localized URLs, preferably `/en/` and `/cs/`.
- Localize navigation, buttons, forms, metadata, and interface text.
- Preserve the corresponding page when switching languages whenever a translation exists.
- Localize SEO metadata.
- Implement appropriate `hreflang` tags.
- Use a proper language-aware routing structure.
- Do not automatically translate content and publish it without editorial approval.
- Make it easy to add another language in the future.

Use a reliable Sanity internationalization strategy, preferably the official document internationalization tooling where appropriate.

Do not mix English and Czech content on the same page.

### 5. Website Structure

Create the following pages and sections.

#### 5.1 Home

The homepage should provide an impressive introduction to the person.

Include:
- Hero section with portrait or editorial photograph.
- Name and professional/religious title.
- Short introduction.
- Main call-to-action buttons.
- Brief biography.
- Selected activities and projects.
- Featured books.
- Latest articles.
- Latest news.
- Upcoming events.
- Selected media appearances.
- Contact section.

The homepage should be modular and allow the administrator to control featured content through Sanity.

#### 5.2 Biography

A dedicated biography page.

Include:
- Full biography.
- Personal and professional background.
- Education.
- Career and important milestones.
- Theological background and areas of expertise.
- Achievements.
- Relevant photographs.

Use structured content blocks that can be edited through Sanity.

#### 5.3 Activities & Projects

Present the person's professional, theological, educational, and social activities.

Each activity/project should support:
- Title.
- Description.
- Main image.
- Additional images.
- External links.
- Category.
- Start and end dates, where relevant.
- Featured status.
- English and Czech content.

#### 5.4 Books

Create a dedicated book catalog.

Each book should support:
- Cover image.
- Title.
- Subtitle.
- Description.
- Author.
- Publication date/year.
- Publisher.
- ISBN.
- Language of publication.
- Purchase links.
- Reading or download links, where permitted.
- Related articles or media.
- Featured status.

Create individual book detail pages.

#### 5.5 Articles & Publications

Create an editorial section for long-form content.

Each article should support:
- Title.
- Slug.
- Excerpt.
- Main image.
- Rich-text content.
- Author.
- Publication date.
- Categories.
- Tags.
- Related books.
- Related articles.
- SEO metadata.
- Featured status.

Create individual article pages with a clean reading experience.

#### 5.6 News

A news section for recent activities and announcements.

Each news entry should support:
- Title.
- Short description.
- Main image.
- Full content.
- Publication date.
- Categories.
- External links.
- Related events.
- Featured status.

Display news chronologically.

#### 5.7 Events & Speaking

Create an events and speaking engagements section.

Each event should support:
- Event title.
- Description.
- Date and time.
- Location.
- Venue.
- Event image.
- Registration link.
- External website.
- Event status (upcoming, completed, cancelled).
- Language.
- Related media.

Clearly distinguish upcoming and past events.

#### 5.8 Media

Create a dedicated media section for:
- Videos.
- Podcasts.
- Interviews.
- Lectures.
- Recorded speeches.
- Audio materials.

Support YouTube, Vimeo, podcast platforms, and external media links.

Each media entry should support:
- Title.
- Description.
- Thumbnail.
- Media type.
- Embed URL or external URL.
- Publication date.
- Duration, where relevant.
- Related articles or events.

Use safe embedding practices.

#### 5.9 Gallery

Create a photographic gallery.

Requirements:
- Image grid.
- Categories or albums.
- Image descriptions.
- Captions.
- Alt text.
- Lightbox functionality.
- Responsive layouts.

Images must be uploaded and managed through Sanity.

#### 5.10 Media Coverage

A section featuring external publications and press mentions.

Each entry should support:
- Publication name.
- Article title.
- Short description.
- Publication logo or image.
- Publication date.
- External article URL.
- Category.
- Featured status.

External links should open appropriately and be clearly identifiable.

#### 5.11 Contact & Social Media

Create a professional contact page or section.

Include:
- Contact information.
- Contact form.
- Social media links.
- Professional contact details.
- Optional booking or speaking inquiry link.

The contact form must have server-side validation, spam protection, and an appropriate submission mechanism. Do not implement a form that appears functional but does not actually send messages.

### 6. Sanity CMS — Most Important Part

Sanity Studio must be designed specifically for a non-technical website owner.

The administrator must never need to edit source code to manage the website.

Create clear document types:

1. Site Settings
2. Homepage
3. Biography
4. Activities & Projects
5. Books
6. Articles
7. News
8. Events
9. Media
10. Gallery Albums / Gallery Images
11. Media Coverage
12. Social Media Links

Use a logical Studio structure with clear names, descriptions, and icons.

#### CMS usability requirements

The administrator must be able to:

- Create new content.
- Edit existing content.
- Delete content.
- Upload and replace photographs.
- Add image descriptions and alt text.
- Add external links.
- Preview content before publication.
- Save drafts.
- Publish content.
- Unpublish content.
- Schedule publication where supported and configured.
- Change the order of featured content.
- Manage categories and tags.
- Edit English and Czech translations.
- Manage homepage sections.
- Update contact details.
- Update social media links.

#### Content editor experience

Make the editing experience as simple as possible.

Use:
- Clear field labels.
- Helpful descriptions.
- Sensible default values.
- Required-field validation.
- Image previews.
- Grouped fields.
- Separate English and Czech editing experiences.
- Appropriate input types.
- Reference fields for related content.

Use custom Studio components or document actions only where they provide meaningful usability improvements.

#### Sanity content architecture

Design proper schemas with:
- Reusable objects.
- References between documents.
- Localized content.
- Validation rules.
- SEO fields.
- Image metadata.
- Publication dates.
- Slugs.
- Featured flags.

Avoid duplicating content unnecessarily.

Configure a clear publishing workflow and permissions so the client has appropriate editorial access without needing developer-level access.

The Studio should be deployed and accessible through a simple URL.

### 7. Homepage Content Management

The administrator must be able to manage homepage content independently.

For example:
- Change the hero title.
- Change the introduction.
- Replace the main photograph.
- Select featured books.
- Select featured articles.
- Select featured news.
- Select upcoming events.
- Select featured media.
- Change section visibility.
- Change section ordering where appropriate.

Do not hardcode important homepage content in Astro components.

### 8. UI/UX Requirements

Implement:
- Responsive navigation.
- Mobile navigation menu.
- Language switcher.
- Professional footer.
- Breadcrumb navigation where appropriate.
- Search functionality for content-rich sections.
- Pagination or load-more functionality.
- Clear empty states.
- Loading and error states where relevant.
- Accessible interactive components.
- Consistent buttons, cards, typography, and spacing.

Animations should be subtle and must not negatively affect accessibility or performance.

Support keyboard navigation and reduced-motion preferences.

### 9. SEO and Performance

Implement:
- Unique page titles.
- Meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Twitter/X card metadata.
- XML sitemap.
- Robots.txt.
- Structured data using appropriate Schema.org types.
- Localized metadata and `hreflang`.
- Optimized images.
- Lazy loading where appropriate.
- Correct image dimensions.
- Semantic HTML.

Target excellent Core Web Vitals and Lighthouse scores.

Avoid unnecessary JavaScript on the client.

### 10. Security and Reliability

Implement:
- Secure environment variable handling.
- No exposed private API tokens.
- Server-side validation.
- Secure contact form handling.
- Input sanitization where appropriate.
- Safe external links and media embedding.
- Proper access control for Sanity Studio.
- Graceful handling of missing content and API failures.

Never allow unauthenticated visitors to access administrative functionality.

### 11. Deployment

Prepare the project for production deployment.

Recommended architecture:
- Astro frontend deployed to Vercel, Netlify, or another suitable hosting provider.
- Sanity Studio deployed separately or integrated into an appropriate Studio route.
- Sanity Content Lake as the content backend.
- Custom domain support.
- Environment variable configuration.
- Production build and deployment instructions.

The administrator should only need the Sanity Studio URL and their login credentials to manage content.

Provide documentation explaining:
- How to access Sanity Studio.
- How to add an article.
- How to add a book.
- How to publish news.
- How to add an event.
- How to upload photographs.
- How to edit the biography.
- How to update English and Czech content.

Write this documentation in simple, non-technical language.

### 12. Development Workflow — Claude Code Instructions

Work as an autonomous senior developer, but follow a controlled, incremental development process.

**Do not attempt to generate the entire application in one step.**

Follow these phases:

**Phase 1 — Project Inspection & Planning**
- Inspect the existing repository.
- Identify existing dependencies and architecture.
- Check the installed Node.js and package manager versions.
- Identify potential conflicts.
- Propose the final project architecture.
- Present a development plan.
- Do not delete or overwrite existing work without justification.

**Phase 2 — Project Setup**
- Configure Astro and TypeScript.
- Configure Tailwind CSS.
- Configure Sanity.
- Configure environment variables.
- Verify that the development environment works.

**Phase 3 — Sanity CMS**
- Implement all content schemas.
- Configure localization.
- Build the Studio structure.
- Implement validation.
- Configure relationships and references.
- Verify that content can be created, edited, and published.

**Phase 4 — Design System**
- Establish typography.
- Establish colors.
- Create reusable components.
- Implement responsive layouts.
- Establish consistent design rules.

**Phase 5 — Frontend Development**
- Implement the homepage.
- Implement all content pages.
- Connect Astro to Sanity.
- Implement localized routes.
- Implement navigation and search.
- Implement content detail pages.

**Phase 6 — Advanced Features**
- Implement SEO.
- Implement media embeds.
- Implement gallery and lightbox.
- Implement contact form.
- Implement search and pagination.
- Implement preview functionality where appropriate.

**Phase 7 — Testing & Optimization**
- Run production builds.
- Check TypeScript errors.
- Check responsive behavior.
- Check all routes.
- Check both languages.
- Check Sanity content queries.
- Check image optimization.
- Check accessibility.
- Check SEO metadata.
- Fix all critical issues.

**Phase 8 — Deployment & Documentation**
- Prepare production configuration.
- Explain deployment.
- Explain Sanity Studio deployment.
- Prepare client documentation.
- Provide a final project summary.

### 13. Critical Rules for Claude Code

Follow these rules throughout development:

1. Never skip project inspection.
2. Never assume the repository is empty.
3. Never overwrite working code without first inspecting it.
4. Never fabricate the client's biography, credentials, books, achievements, or publications.
5. Use realistic placeholder content only where necessary and clearly identify it as placeholder content.
6. Keep all editable content in Sanity.
7. Do not hardcode content that the client should be able to edit.
8. Do not expose secrets or private API tokens.
9. Do not use outdated APIs or deprecated packages without a justified reason.
10. Write clean, maintainable, properly typed code.
11. Avoid unnecessary abstractions and dependencies.
12. Verify each implementation phase before moving to the next.
13. Explain important architectural decisions.
14. Report errors honestly and fix them instead of hiding them.
15. Do not claim that functionality works unless it has been tested.

### 14. How to Communicate During Development

I want to understand the project and be able to maintain it as a developer.

For every major phase:
- Explain what you are implementing.
- Explain why it is necessary.
- Show the relevant project structure.
- Identify the important files.
- Explain the commands being executed.
- Run appropriate checks.
- Report the results.
- Tell me what has been completed and what remains.

Do not overwhelm me with unnecessary explanations, but provide enough technical detail to understand the architecture.

If an important decision requires information about the client, ask before making assumptions.

Do not stop after creating a homepage mockup. The goal is a complete, working, production-ready website with a functional Sanity CMS.

---

## FINAL OBJECTIVE

Deliver a complete, premium-quality bilingual personal website for a religious figure and theologian, powered by Astro and Sanity.

The public-facing website must look professional, authoritative, elegant, and modern.

The administrative interface must be simple enough that a person without programming knowledge can independently manage every important part of the website.

Prioritize content management usability, visual quality, maintainability, accessibility, SEO, and production reliability.

**Start with Phase 1: inspect the existing repository and present your proposed architecture and implementation plan. Do not start making major code changes until the inspection and plan are complete.**