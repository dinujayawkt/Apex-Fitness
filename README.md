# Apex Fitness Sports Center

Responsive promotional website for a local gym brand launch.

## Tech Stack

- **Next.js** (App Router)
- **React** 19
- **CSS** (global design system)
- **Framer Motion** (scroll reveal animations)
- **next-themes** (light/dark mode toggle)
- **EmailJS** (contact form delivery)
- **lucide-react** (icons)

## Live Link

https://apex-fitness-bytd.vercel.app/

## Links

- **Figma Design**: https://www.figma.com/design/LIyV06LjcDDBLGHGb4mW1G/Gym-Promotional-site?node-id=0-1&t=WvYaBDnmywXYKHm0-1
- **GitHub Repository**: https://github.com/dinujayawkt/Apex-Fitness

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
