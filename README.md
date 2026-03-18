# Apex Fitness Sports Center

Responsive promotional website for a local gym brand launch.

## Figma Design Link

- Add your Figma file link here: `https://figma.com/...`

## GitHub Repository Link

- Add your repository link here: `https://github.com/...`

## Live Deployed Link

- Add your deployed link here: `https://...`

## Tech Stack

- Next.js (App Router)
- React
- CSS (global design system)
- Framer Motion (scroll reveal animations)
- next-themes (light/dark mode toggle)
- lucide-react (icons)

## Features

- Hero, About, Services, Plans, Trainers, and Contact sections
- Responsive navigation + mobile menu
- Theme switcher (dark/light)
- Contact form with client-side validation and EmailJS delivery
- Reusable component structure:
	- `components/layout`
	- `components/sections`
	- `components/ui`
	- `components/providers`

## EmailJS Setup

1. Create an EmailJS account and configure:
- a service
- an email template

2. Copy `.env.example` to `.env.local` and add your EmailJS values:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Ensure your EmailJS template contains matching variables:
- `from_name`
- `from_email`
- `reply_to`
- `message`

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Build For Production

```bash
npm run build
npm run start
```

## Submission Checklist

- [ ] Figma design link added
- [ ] GitHub repo link added
- [ ] Live deployed link added
- [ ] Multiple meaningful commits pushed
