# 🚀 Modern Portfolio Website

![CI/CD](https://github.com/username/my-portfolio/workflows/CI/CD%20Pipeline/badge.svg)
![Code Quality](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black.svg)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, internationalization, smooth animations, and a complete CI/CD pipeline.

## ✨ Features

- 🌓 **Dark/Light Mode** - Toggle with localStorage persistence
- 🌍 **Internationalization** - English/Vietnamese support
- ✨ **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Mobile-first design
- 🎨 **Modern UI** - Clean, professional interface
- 📧 **Contact Form** - EmailJS integration
- 🔧 **CI/CD Pipeline** - Automated testing and deployment
- 📊 **Code Quality** - ESLint + Prettier + TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Code Quality**: ESLint + Prettier
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (ready)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or 20.x
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/username/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

## 📧 EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Setup email service (Gmail/Outlook)
3. Create email template with variables: `from_name`, `from_email`, `message`
4. Copy your credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAILJS_SETUP.md` for detailed instructions.

## 📝 Available Scripts

```bash
# Development
npm run dev                 # Start development server

# Code Quality
npm run lint               # Fix ESLint errors automatically
npm run lint:check         # Check for ESLint errors only
npm run format             # Format code with Prettier
npm run format:check       # Check code formatting
npm run type-check         # TypeScript type checking

# Build
npm run build              # Build for production
npm start                  # Start production server
```

## 🔄 CI/CD Pipeline

### Automated Checks

- ✅ ESLint validation
- ✅ Prettier formatting check
- ✅ TypeScript compilation
- ✅ Build verification
- ✅ Multi-Node.js version testing (18.x, 20.x)

### Pre-commit Hooks

- Automatic code formatting
- ESLint error fixing
- Type checking

### GitHub Actions Workflows

- **CI/CD Pipeline**: Runs on push/PR to main/develop
- **Dependency Updates**: Weekly automated updates
- **Deployment**: Auto-deploy to production on main branch

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles & CSS variables
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Home page
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation with theme/language toggle
│   ├── Footer.tsx      # Footer component
│   ├── ContactForm.tsx # Contact form with EmailJS
│   └── ...
├── sections/           # Page sections
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Featured projects
│   ├── Education.tsx   # Education timeline
│   └── Contact.tsx     # Contact section
├── contexts/           # React contexts
│   └── AppContext.tsx  # Theme & language state
├── hooks/              # Custom React hooks
│   └── useTranslation.ts
├── data/               # Static data
│   ├── translations.ts # i18n translations
│   ├── projects.ts     # Project data
│   └── skills.ts       # Skills data
└── types/              # TypeScript definitions
```

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #3b82f6;
  /* ... */
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  /* ... */
}
```

### Content

- **Personal Info**: Update `src/sections/Hero.tsx`, `src/sections/About.tsx`
- **Projects**: Edit `src/data/projects.ts`
- **Skills**: Modify `src/data/skills.ts`
- **Translations**: Update `src/data/translations.ts`

### Styling

- **Colors**: Tailwind classes with semantic CSS variables
- **Animations**: Framer Motion variants in components
- **Responsive**: Mobile-first Tailwind breakpoints

## 🌍 Internationalization

Support for English and Vietnamese:

- Toggle with language button in header
- Translations stored in `src/data/translations.ts`
- Add new languages by extending translations object

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Next.js
- **Loading**: Lazy loading and code splitting
- **Images**: Next.js Image optimization (when images added)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

See `CONTRIBUTING.md` for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ Star this repository if it helped you build your portfolio!
