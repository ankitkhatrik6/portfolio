# Portfolio Website - Ankit Khatri KC

A modern, responsive portfolio website showcasing my skills and projects as a Full Stack Developer with interests in AI/ML and Cybersecurity.

![Portfolio Preview](https://ankitkhatri.me/preview.png)

## 🚀 Live Demo

Visit: [ankitkhatri.me](https://ankitkhatri.me)

## ✨ Features

- **Fully Responsive Design** - Works seamlessly on all devices
- **Modern UI/UX** - Clean dark theme with smooth animations
- **Fast Performance** - Built with Vite for optimal loading speed
- **SEO Optimized** - Complete meta tags for search engines and social media
- **Smooth Animations** - Powered by Framer Motion
- **Interactive Sections**:
  - Hero section with profile introduction
  - About me with skills showcase
  - Education timeline
  - Project portfolio
  - Contact information with social links

## 🛠️ Technologies Used

- **React 18** - Frontend library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── ankit.png          # Profile image
│   ├── favicon.png         # Site favicon
│   └── preview.png         # Social media preview
├── src/
│   ├── components/
│   │   ├── About.jsx/css
│   │   ├── Contact.jsx/css
│   │   ├── Education.jsx/css
│   │   ├── Footer.jsx/css
│   │   ├── Header.jsx/css
│   │   ├── Hero.jsx/css
│   │   └── Projects.jsx/css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ankitkhatrik6/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📝 Customization

To customize this portfolio for your own use:

1. Update personal information in `src/components/Hero.jsx`
2. Modify skills and about section in `src/components/About.jsx`
3. Add your education details in `src/components/Education.jsx`
4. Showcase your projects in `src/components/Projects.jsx`
5. Update contact information in `src/components/Contact.jsx`
6. Replace images in `public/` folder
7. Update meta tags in `index.html`

## 📧 Contact

**Ankit Khatri KC**
- Email: ankitkhatrik6@gmail.com
- Phone: +977 9705847863
- Location: Kathmandu, Nepal
- Portfolio: [ankitkhatri.me](https://ankitkhatri.me)

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ by Ankit Khatri KC

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment to GitHub Pages

### Steps:

1. **Create a GitHub repository** named `portfolio` (or any name you prefer)

2. **Update `vite.config.js`**
   - Change the `base` property to match your repository name:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Change if your repo has a different name
   })
   ```

3. **Update `package.json`**
   - Update the `homepage` field:
   ```json
   "homepage": "https://yourgithubusername.github.io/portfolio"
   ```

4. **Install gh-pages** (already in dependencies)
   ```bash
   npm install
   ```

5. **Deploy**
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**
   - Go to your repository settings
   - Under "GitHub Pages", select "gh-pages" branch as the source
   - Your portfolio will be live at `https://yourgithubusername.github.io/portfolio`

## Customization

### Update Personal Information

Edit the following files to add your information:

- **Hero.jsx**: Update name, subtitle, description, and contact info
- **About.jsx**: Update about text and skills
- **Education.jsx**: Update education history
- **Projects.jsx**: Add your projects
- **Contact.jsx**: Update contact information and social links

### Customize Colors

Edit `index.css` to modify the color scheme:

```css
/* Change primary color */
background: linear-gradient(135deg, #3b82f6, #8b5cf6);
color: #f1f5f9;
```

### Add More Sections

To add new sections:

1. Create a new component in `src/components/`
2. Add styling in a corresponding `.css` file
3. Import and include in `App.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Fast load times with Vite
- Smooth animations with Framer Motion
- Responsive images and lazy loading ready

## Accessibility

- Semantic HTML structure
- ARIA labels where applicable
- Keyboard navigation support
- Color contrast compliance

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: ankitkhatrik6@gmail.com
- **GitHub**: https://github.com/ankitkhatrik6
- **LinkedIn**: https://linkedin.com/in/ankit-khatri-kc-baa76a397
- **Instagram**: https://instagram.com/21ank1t

## Credits

Designed and built by Ankit Khatri KC. Inspired by modern portfolio websites and best practices in web design.

---

Made with ❤️ using React and Vite
