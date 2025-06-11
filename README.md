# 🚀 BCCSS Website

<div align="center">
  <img src="src/assets/bccsslogo.jpg" alt="BCCSS Logo" width="120" height="120" style="border-radius: 12px;">
  
  **Boston College Computer Science Society**
  
  *Empowering the next generation of technologists and innovators*
  
  [![Live Site](https://img.shields.io/badge/🌐_Live_Site-bccss.co-00D4AA?style=for-the-badge)](https://bccss.co)
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.6-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📖 About

The official website for the Boston College Computer Science Society (BCCSS). Built with modern web technologies and featuring a unique terminal-inspired design that reflects our tech-forward community.

### ✨ Features

- 🖥️ **Terminal-themed UI** with retro aesthetics
- ⚡ **Lightning-fast performance** with Vite
- 📱 **Fully responsive** mobile-first design
- 🎨 **Smooth animations** and interactive elements
- 🔗 **Clean URLs** with React Router
- 🎯 **Epic 404 page** with glitch effects
- ♿ **Accessible** and semantic HTML
- 🚀 **Auto-deployment** to GitHub Pages

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | UI Framework |
| **TypeScript** | 5.7.2 | Type Safety |
| **Vite** | 6.1.0 | Build Tool |
| **Tailwind CSS** | 4.0.6 | Styling |
| **React Router** | 6.22.3 | Client-side Routing |
| **Swiper** | 11.2.5 | Image Carousel |
| **ESLint** | 9.19.0 | Code Linting |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bccss.git
   cd bccss
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### 📁 Project Structure

```
bccss/
├── 📁 public/           # Static assets
│   ├── 📁 events/       # Event photos
│   ├── 📁 board/        # Board member photos
│   ├── 404.html         # GitHub Pages SPA support
│   └── CNAME            # Custom domain config
├── 📁 src/
│   ├── 📁 assets/       # Images and media
│   ├── 📁 components/   # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ImageCarousel.tsx
│   ├── 📁 pages/        # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Join.tsx
│   │   ├── NotFound.tsx
│   │   └── index.ts
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-green: #00D4AA    /* BCCSS Brand Green */
--primary-teal: #00B4D8     /* Accent Teal */

/* Surface Colors */
--surface-black: #0A0A0A    /* Deep Black */
--surface-gray: #1A1A1A     /* Dark Gray */
--surface-border: #2A2A2A   /* Border Gray */

/* Text Colors */
--text-white: #FFFFFF       /* Primary Text */
--text-gray: #B0B0B0        /* Secondary Text */
--text-dim: #808080         /* Tertiary Text */

/* Accent Colors */
--accent-purple: #8B5CF6    /* Purple Accent */
--accent-pink: #EC4899      /* Pink Accent */
```

### Typography

- **Headers**: Custom font stack with fallbacks
- **Body**: System font stack for optimal performance
- **Code**: Monospace for terminal elements

---

## 🤝 Contributing

We welcome contributions from the BCCSS community! Here's how you can help:

### 🐛 Bug Reports

Found a bug? Please create an issue with:
- **Description** of the problem
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Browser/device** information

### ✨ Feature Requests

Have an idea? We'd love to hear it! Include:
- **Clear description** of the feature
- **Use case** and benefits
- **Mockups or examples** (if applicable)

### 💻 Code Contributions

#### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
   ```bash
   npm run lint    # Check code style
   npm run build   # Test build
   ```
5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add amazing new feature"
   ```
6. **Push and create a Pull Request**

#### Code Style Guidelines

- ✅ Use **TypeScript** for type safety
- ✅ Follow **ESLint** rules
- ✅ Use **functional components** with hooks
- ✅ Keep components **small and focused**
- ✅ Use **semantic HTML** elements
- ✅ Add **comments** for complex logic
- ✅ Test on **mobile devices**

#### Commit Convention

We use conventional commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🚀 Deployment

The site is automatically deployed to [bccss.co](https://bccss.co) using GitHub Pages.

### Manual Deployment

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Update the live site

---

## 🎯 Roadmap

### 🔄 Current Sprint
- [ ] Add event registration system
- [ ] Implement member directory
- [ ] Add blog/news section

### 🚀 Future Features
- [ ] Dark/light theme toggle
- [ ] Member login portal
- [ ] Event calendar integration
- [ ] Newsletter signup
- [ ] Job board integration

---

## 🤔 FAQ

### **Q: How do I add a new page?**
A: Create a new component in `src/pages/`, export it from `src/pages/index.ts`, and add a route in `src/main.tsx`.

### **Q: How do I update board member photos?**
A: Add photos to `public/board/` and update the board member data in the About page component.

### **Q: How do I add new events photos?**
A: Add photos to `public/events/` and update the images array in `src/components/ImageCarousel.tsx`.

### **Q: The site isn't updating after deployment**
A: GitHub Pages can take a few minutes to update. Try clearing your browser cache or checking in an incognito window.

---

## 📞 Support

Need help? Reach out to us:

- 💬 **Slack**: [bccss.slack.com](https://bccss.slack.com)
- 📧 **Email**: [Newsletter](https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss)
- 📸 **Instagram**: [@bccssociety](https://www.instagram.com/bccssociety/)
- 🔗 **GitHub**: [github.com/bccss](https://github.com/bccss)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **BCCSS Board Members** for their vision and leadership
- **Boston College** for supporting our community
- **Contributors** who help make this site amazing
- **Open Source Community** for the incredible tools we use

---

<div align="center">
  <p>Made with ❤️ by the BCCSS Community</p>
  <p>© 2025 Boston College Computer Science Society</p>
</div>