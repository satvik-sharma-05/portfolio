# Satvik Sharma - Portfolio

A modern, fully responsive portfolio website showcasing AI/ML projects, experience, and skills. Built with Next.js, TypeScript, Framer Motion, and GSAP.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion and GSAP
- **Interactive UI** - Infinite scrolling, snap scrolling, and touch-optimized
- **Modern Tech Stack** - Next.js 14, TypeScript, Tailwind CSS
- **Performance Optimized** - Fast loading, lazy loading, and efficient animations
- **Accessibility** - Keyboard navigation, reduced motion support

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Laptop**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large screens**: > 1280px

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/satvik-sharma-05/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certificates.tsx
│   │   └── Contact.tsx
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and data
│   └── projectsData.ts    # Projects data
├── public/                # Static assets
│   ├── pics/              # Project images
│   └── certificates/      # Certificates and resume
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: #ff6b00 (Orange) - Accents and highlights
- **Dark**: #0a0a0a (Black) - Backgrounds
- **Light**: #ffffff (White) - Text and icons

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive sizes**: text-sm → text-base → text-lg → text-xl

### Components
- Glass-morphism cards
- Smooth transitions
- Orange glow effects
- Gradient backgrounds

## 📱 Mobile Optimizations

### Hero Section
- Stacked layout on mobile
- Reduced image size
- Center-aligned content
- Touch-friendly buttons

### Skills Section
- Slower scroll speed on mobile
- Smaller cards
- Touch interaction support
- Swipe-enabled

### Projects Section
- Horizontal scroll with snap
- Cards take 80% width on mobile
- Touch-optimized navigation
- Full-screen modal on mobile

### Experience Section
- Single column timeline on mobile
- Simplified layout
- Responsive spacing

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/satvik-sharma-05/portfolio)

## 🔧 Configuration

### Environment Variables
No environment variables required for basic setup.

### Customization
- Update personal info in `myinfo.md`
- Add projects in `lib/projectsData.ts`
- Update experience in `components/sections/Experience.tsx`
- Add certificates in `public/certificates/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Satvik Sharma**
- Email: satviksharma0510@gmail.com
- GitHub: [@satvik-sharma-05](https://github.com/satvik-sharma-05)
- LinkedIn: [satvik-sharma-05](https://linkedin.com/in/satvik-sharma-05)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org)

---

Made with ❤️ by Satvik Sharma
