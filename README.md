# Portfolio

A clean, modern, and fully responsive personal portfolio built with React (Vite), Tailwind CSS, React Router, Lucide icons, and Framer Motion. Optimized for GitHub Pages deployment.

## Tech Stack
- React (Vite)
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

## Getting Started
1. Install dependencies:
   - `npm install`
2. Run the development server:
   - `npm run dev`

## GitHub Pages Deployment

### 1. Setup Git and Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ankitkhatrik6/Portfolio.git
git push -u origin main
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
```

### 3. Configure Custom Domain (ankitkhatri.me)

**In GitHub Repository Settings:**
1. Go to https://github.com/ankitkhatrik6/Portfolio/settings/pages
2. Under "Custom domain", enter: `ankitkhatri.me`
3. Check "Enforce HTTPS" (wait a few minutes for SSL to provision)

**In Your Domain Provider DNS Settings:**
Add these DNS records:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     ankitkhatrik6.github.io
```

Wait 24-48 hours for DNS propagation. Your site will be live at https://ankitkhatri.me

## Folder Structure
- src/components: Reusable UI components
- src/sections: Home page sections
- src/data: Portfolio content data
- src/hooks: Custom hooks

## SEO Optimization
This portfolio is optimized for search engines with:
- Comprehensive meta tags (title, description, keywords)
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (Schema.org Person markup)
- Semantic HTML5 elements
- robots.txt for crawler instructions
- sitemap.xml for better indexing
- Fast loading with Vite optimization
- Mobile-responsive design

**To rank higher on Google:**
1. Submit sitemap to Google Search Console: https://search.google.com/search-console
2. Add website to Google My Business (if applicable)
3. Build quality backlinks (GitHub, LinkedIn, dev.to, medium.com)
4. Regular content updates (add new projects)
5. Social media sharing for increased visibility
6. Ensure fast page load speed (already optimized with Vite)

## Notes
- The contact form opens your email client via `mailto:ankitkhatrik6@gmail.com`. No backend setup required.
- Update the CV link in [src/sections/Hero.jsx](src/sections/Hero.jsx) with your actual CV URL
- The 404 redirect setup supports React Router on GitHub Pages.
