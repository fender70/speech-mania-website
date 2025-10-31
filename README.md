# Speech Mania

A modern, responsive website for Speech Mania - a youth-led organization empowering students across Southeast Asia through public speaking and leadership programs.

## About Speech Mania

Speech Mania provides world-class public speaking education to students across Thailand and Southeast Asia. We host national competitions, provide training workshops, and manage Thailand's National Public Speaking team for the World Individual Debating and Public Speaking Championships (WIDPSC).

## Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Dynamic Content**: Interactive components for competitions, programs, and events
- **Resource Library**: Free downloadable resources for students and educators
- **Impact Showcase**: Real-time statistics and testimonials from participants
- **Event Management**: Featured events and competition information

## Tech Stack

- **React 18.3.1** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SpeechMania3.0
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, logos, and static files
│   ├── general_pictures/
│   ├── headshots/
│   ├── logo/
│   ├── resources/
│   └── sponsors/
├── components/      # Reusable React components
│   ├── figma/
│   └── ui/
├── pages/          # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ProgramsPage.tsx
│   ├── ImpactPage.tsx
│   ├── GetInvolvedPage.tsx
│   └── ContactPage.tsx
└── App.tsx         # Main application component
```

## Key Pages

- **Home**: Landing page with hero section, impact stats, and featured events
- **About**: Organization mission, team information, and why speech matters
- **Programs**: Details on competitions, workshops, and national team management
- **Impact**: Success stories, testimonials, and achievement gallery
- **Get Involved**: Registration forms, sponsorship opportunities, and free resources
- **Contact**: Contact information, FAQ, and inquiry form

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify via their dashboard or CLI

## Contributing

This project is maintained by the Speech Mania team. For inquiries about contributing, please contact us through our website.

## Contact

- **Email**: speechmaniaofficial@gmail.com
- **Location**: Bangkok, Thailand
- **Website**: [Coming Soon]

## License

© 2025 Speech Mania. All rights reserved.
