# Sneha Dhole - Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and experience to potential employers.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional light theme with smooth animations
- **Easy to Customize** - Simple HTML structure and well-organized CSS
- **Fast Loading** - Lightweight with no external dependencies (except Font Awesome icons)
- **Accessibility** - Semantic HTML and proper ARIA labels
- **Mobile-Friendly Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Smooth navigation between sections
- **Contact Form** - Working email contact functionality
- **Social Links** - Easy links to LinkedIn, GitHub, and email

## 📁 File Structure

```
Portfolio-Sneha-Dhole/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── assets/
│   └── images/         # Place your images here
└── README.md           # This file
```

## 🚀 Quick Start

1. **Open Locally**
   - Download or clone this repository
   - Open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

2. **Customize Your Content**
   - Edit `index.html` to update your information
   - Modify `styles.css` to change colors and styling
   - Update social links and contact information

## 📝 How to Update Content

### Personal Information
Open `index.html` and update:
- Name in the navbar (`<h1>`)
- Hero section heading and subtitle
- About section text
- Contact information and links

### Skills Section
Add or modify skill tags in the skills section:
```html
<span class="skill-tag">Your Skill</span>
```

### Projects
Edit project cards to showcase your work:
```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <div class="project-tags">
            <span>Tech Stack</span>
        </div>
    </div>
    <!-- Update description and features -->
</div>
```

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004499;
    --accent-color: #ff6b35;
    /* ... other colors ... */
}
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New" to create a new repository
3. Name it `portfolio` or similar
4. Add a description
5. Make it public (for free hosting)
6. Click "Create repository"

### Step 2: Upload Files
Option A - Using Git:
```bash
# Navigate to your project folder
cd Portfolio-Sneha-Dhole

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Option B - Using GitHub Web Interface:
1. Go to your repository
2. Click "Add file" > "Upload files"
3. Drag and drop your HTML, CSS, and JS files
4. Commit the changes

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Under "Source", select "main" branch
4. Select root directory as the source
5. Click Save
6. Wait a few minutes - your site will be live at:
   `https://YOUR-USERNAME.github.io/portfolio`

## 🎨 Customization Tips

### Change the Theme
Modify the CSS variables in `styles.css`:
- Primary color: `--primary-color`
- Accent color: `--accent-color`
- Text color: `--text-dark`
- Background colors: `--bg-light`, `--bg-white`

### Add Profile Picture
1. Place your image in the `assets/images/` folder
2. Add an image section in the hero or about area:
```html
<img src="assets/images/profile.jpg" alt="Sneha Dhole" class="profile-image">
```

### Add More Projects
Duplicate a project card and update the content:
```html
<div class="project-card">
    <!-- Copy from existing project and modify -->
</div>
```

### Modify Social Links
Update the URLs in the social links section:
```html
<a href="https://your-linkedin-url" target="_blank">LinkedIn</a>
```

## 📱 Mobile Optimization

The portfolio is fully responsive:
- **Desktop**: Full layout with all features
- **Tablet**: Optimized for touch and medium screens
- **Mobile**: Single column layout with hamburger menu

Test on different devices:
- Use your browser's developer tools (F12)
- Select "Toggle device toolbar" to test responsive design

## 🔧 Troubleshooting

### Links not working
- Check that URLs start with `http://` or `https://`
- Verify all `href` attributes are correct
- For internal links, use `#section-id`

### Styling issues
- Clear your browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+F5)
- Check that `styles.css` is in the same folder as `index.html`

### Contact form not working
- The form opens your default email client
- Make sure your email is configured in the system
- For advanced functionality, you may need backend processing

## 📊 SEO Optimization

To improve search visibility:
1. Add meta description in `<head>`:
```html
<meta name="description" content="Your portfolio description">
```

2. Add keywords:
```html
<meta name="keywords" content="software developer, full stack, react">
```

3. Update the title for each page/section

## 🔐 Privacy & Security

- No user data is collected
- Contact form uses mailto: (opens email client)
- All links are to your own social profiles
- No external analytics or tracking

## 📞 Support

For help with GitHub Pages:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

## 📄 License

This portfolio template is open for personal use. Feel free to customize it!

## ✨ Next Steps

1. ✅ Customize your information
2. ✅ Test locally in your browser
3. ✅ Deploy to GitHub Pages
4. ✅ Share your portfolio URL
5. ✅ Keep it updated with new projects and skills

---

**Good luck with your placement journey!** 🚀
