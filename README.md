# Quad Solutions - Medical Credentialing Services Website

A professional, production-level, fully responsive healthcare website built with React and Tailwind CSS.

## 🎯 Project Overview

This website is designed for Quad Solutions, a healthcare company specializing in medical credentialing services. The site features a clean, modern design that builds trust and generates leads.

## ✨ Features

### Pages
- **Home** - Hero section, services overview, why choose us, testimonials preview, CTAs
- **About** - Company introduction, mission & vision, core values, team section
- **Services** - Detailed service cards with features for all 5 core services
- **Process** - Step-by-step workflow with timeline design (4 steps)
- **Testimonials** - 6 client reviews with ratings and specialties
- **Contact** - Working contact form with validation, Google Maps embed
- **FAQ** - Comprehensive accordion-style FAQ with 4 categories

### Functional Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navigation with scroll effects
- ✅ Smooth scrolling and page transitions
- ✅ Working contact form with frontend validation
- ✅ Interactive FAQ accordion
- ✅ Scroll-triggered animations
- ✅ Loading states and success messages
- ✅ SEO-friendly structure
- ✅ Accessible (ARIA labels, proper contrast)

### Design Features
- 🎨 Professional medical color palette (Blue, White, Light Gray)
- 🎨 Modern Inter font family
- 🎨 Consistent spacing and visual hierarchy
- 🎨 Interactive hover effects
- 🎨 Gradient backgrounds
- 🎨 Card-based layouts
- 🎨 Icon integration with Lucide React

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
quad-solutions/
├── public/
│   └── vite.svg                 # Custom favicon
├── src/
│   ├── components/
│   │   ├── AnimatedSection.jsx  # Scroll animation wrapper
│   │   ├── Footer.jsx           # Site footer
│   │   ├── Navbar.jsx           # Sticky navigation bar
│   │   └── ScrollToTop.jsx      # Scroll to top on route change
│   ├── hooks/
│   │   └── useScrollAnimation.js # Custom scroll animation hook
│   ├── pages/
│   │   ├── About.jsx            # About page
│   │   ├── Contact.jsx          # Contact page with form
│   │   ├── FAQ.jsx              # FAQ page with accordion
│   │   ├── Home.jsx             # Home page
│   │   ├── Process.jsx          # Process workflow page
│   │   ├── Services.jsx         # Services page
│   │   └── Testimonials.jsx     # Testimonials page
│   ├── App.jsx                  # Main app component with routing
│   ├── index.css                # Global styles and Tailwind
│   └── main.jsx                 # React entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── vite.config.js               # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "quad solution (Med Website)"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` (Tailwind blue-600)
- **White**: `#ffffff`
- **Light Gray**: `#f9fafb` (Tailwind gray-50)
- **Text Dark**: `#111827` (Tailwind gray-900)
- **Text Medium**: `#4b5563` (Tailwind gray-600)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Spacing
- Consistent padding and margin using Tailwind's spacing scale
- Section padding: `py-16 md:py-24` (responsive)
- Container max-width: `max-w-7xl`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, testimonials |
| `/about` | Company information, mission, team |
| `/services` | Detailed service offerings |
| `/process` | 4-step credentialing workflow |
| `/testimonials` | Client reviews and ratings |
| `/contact` | Contact form with validation |
| `/faq` | Frequently asked questions |

## 🔧 Components

### Reusable Components
- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Multi-column footer with links and contact info
- **AnimatedSection**: Scroll-triggered animation wrapper
- **ScrollToTop**: Auto-scroll to top on page change

### Custom Hooks
- **useScrollAnimation**: Intersection Observer hook for animations

## ♿ Accessibility

- ARIA labels on interactive elements
- Proper heading hierarchy (h1 → h6)
- Sufficient color contrast ratios
- Keyboard navigation support
- Focus management
- Semantic HTML structure

## 🔍 SEO Features

- Meta description and keywords
- Semantic HTML5 elements
- Proper heading structure
- Clean URL structure
- Fast page load times

## 📋 Contact Form Features

- Real-time validation
- Error messages for invalid inputs
- Loading state during submission
- Success confirmation message
- Required field indicators
- Email format validation
- Phone number validation

## 🎭 Animations

- **Fade In**: Smooth opacity transition
- **Slide Up**: Upward slide with opacity
- **Slide Down**: Downward slide for accordions
- **Hover Effects**: Shadow and color transitions
- **Scroll Animations**: Triggered on viewport entry

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
vercel
```

## 📞 Support

For questions or support, contact:
- Email: info@quadsolutions.com
- Phone: (123) 456-7890

## 📄 License

This project is proprietary and confidential.

## 🙏 Credits

- **Design & Development**: Built with React and Tailwind CSS
- **Icons**: Lucide React (https://lucide.dev)
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Vite

---

**Quad Solutions** - Simplifying Medical Credentialing for Healthcare Professionals
