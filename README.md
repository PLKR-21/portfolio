# Laxmikanth Reddy - Portfolio

A modern, responsive portfolio website showcasing AI & Full-Stack development skills with dark theme and email integration.

## Features

✨ **Modern Design**
- Dark theme with gradient accents
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Beautiful glassmorphism effects

🎯 **Sections**
- Hero with animated code snippet
- About with stats showcase
- Education timeline
- Work experience
- Featured projects
- Skills categorized by type
- Contact form with email integration

📧 **Email Integration**
- EmailJS for primary email service
- Formspree as fallback
- Form validation
- Success/error notifications

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Fonts:** Poppins & Fira Code from Google Fonts
- **Icons:** Font Awesome 6.4.0
- **Email:** EmailJS + Formspree

## File Structure

```
portfolio/
├── index.html          # Main portfolio page
├── portfolio.css       # Styling & dark theme
├── portfolio.js        # Interactivity & email
├── .gitignore         # Git ignore rules
├── README.md          # This file
└── EMAIL_SETUP.md     # Email configuration docs
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/PLKR-21/portfolio.git
```

2. Navigate to the folder:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx http-server
```

4. Visit `http://localhost:8000`

## Deployment

### GitHub Pages

1. Push to GitHub with main/master branch
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" 
4. Choose "main" (or "master") and "/root" folder
5. Your portfolio is live at: `https://yourusername.github.io/portfolio`

### Other Hosting Options

- **Vercel:** Connect GitHub repo → Auto-deploy
- **Netlify:** Drag & drop or connect GitHub
- **Firebase:** `firebase deploy`
- **Traditional Hosting:** Upload files via FTP

## Email Configuration

Email is configured to send messages via Formspree and EmailJS.

**Credentials stored in portfolio.js:**
- EmailJS Public Key: `2dGwyRq7KgaJLnBei`
- Service ID: `service_qh1jkwg`
- Template ID: `template_ezemsjt`
- Formspree Endpoint: `https://formspree.io/f/xblrwdqq`

## Customization

### Change Colors
Edit CSS variables in `portfolio.css`:
```css
:root {
    --primary: #3b82f6;           /* Blue */
    --secondary: #8b5cf6;         /* Purple */
    --accent: #06b6d4;            /* Cyan */
    --bg-dark: #0f172a;           /* Dark background */
    --text-light: #f1f5f9;        /* Light text */
}
```

### Update Content
Edit sections in `index.html`:
- Personal info in hero section
- About section details
- Education timeline
- Experience
- Projects
- Skills

## Performance

- Optimized CSS with minimal repaints
- Vanilla JS (no heavy frameworks)
- Smooth animations using CSS transforms
- Responsive images & lazy loading ready

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

- Email: papagarilaxmikanthreddy@gmail.com
- GitHub: [github.com/PLKR-21](https://github.com/PLKR-21)
- LinkedIn: [linkedin.com/in/plkr21](https://linkedin.com/in/plkr21)

## License

© 2026 Laxmikanth Reddy Papagari. All rights reserved.

---

**Deploy this portfolio to GitHub Pages or any static hosting to make it live!** 🚀
