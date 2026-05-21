# 🎨 Customization Guide

This guide will help you customize every aspect of your portfolio to match your personal brand!

## 📝 Quick Edits Checklist

Go through these steps to personalize your portfolio:

### 1. Update Basic Information

Open `index.html` and find these sections:

**Navigation Bar** (Line ~27)
```html
<h1>Sneha Dhole</h1>  <!-- Change to your name -->
```

**Hero Section** (Line ~50-60)
```html
<h2>Full Stack Developer & QA Engineer</h2>  <!-- Your title -->
<p class="hero-subtitle">Building scalable web applications...</p>  <!-- Your tagline -->
```

**Contact Links** (Line ~65-75)
```html
<a href="https://linkedin.com/in/snehadhole" target="_blank">  <!-- Your LinkedIn -->
<a href="https://github.com/snehadhole7" target="_blank">     <!-- Your GitHub -->
<a href="mailto:Snehadhole7887@gmail.com">                    <!-- Your email -->
```

### 2. Update About Section

Find the About section (Line ~90+):

```html
<p>Hi! I'm a highly motivated B-Tech student...</p>  <!-- Update your story -->

<div class="info-item">
    <strong>Location:</strong>
    <p>Nanded, Maharashtra 431606</p>  <!-- Your location -->
</div>

<div class="info-item">
    <strong>Email:</strong>
    <p><a href="mailto:Snehadhole7887@gmail.com">Your Email</a></p>
</div>
```

### 3. Update Skills Section

Find each skill category and update:

```html
<div class="skill-category">
    <h3>Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Your Skill</span>  <!-- Add your skills -->
    </div>
</div>
```

### 4. Update Projects Section

Each project card has this structure:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <div class="project-tags">
            <span>Tech</span>
            <span>Stack</span>
        </div>
    </div>
    <p class="project-description">
        Brief description of your project
    </p>
    <div class="project-features">
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
    </div>
    <div class="project-footer">
        <small>Month Year</small>
    </div>
</div>
```

### 5. Update Achievements Section

Update achievements/certifications:

```html
<div class="achievement-card">
    <i class="fas fa-award"></i>
    <h3>Your Achievement Title</h3>
    <p>Description of your achievement</p>
</div>
```

---

## 🎨 Style Customization

### Change Color Scheme

Open `styles.css` and find the root CSS variables (Line 8):

```css
:root {
    --primary-color: #0066cc;        /* Main blue color */
    --secondary-color: #004499;      /* Darker blue */
    --accent-color: #ff6b35;         /* Orange accent */
    --text-dark: #2c3e50;            /* Dark text */
    --text-light: #7f8c8d;           /* Light gray text */
    --bg-light: #f8f9fa;             /* Light background */
    --bg-white: #ffffff;             /* White background */
    --border-color: #e0e0e0;         /* Border color */
}
```

**Popular Color Combinations:**

**Professional Blue:**
```css
--primary-color: #003d82;
--accent-color: #1e88e5;
```

**Modern Purple:**
```css
--primary-color: #7c3aed;
--accent-color: #ec4899;
```

**Tech Green:**
```css
--primary-color: #10b981;
--accent-color: #f59e0b;
```

**Corporate Dark:**
```css
--primary-color: #1f2937;
--accent-color: #ef4444;
```

### Change Fonts

Find `body` styling in `styles.css` (Line 49):

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Google Fonts Options:**

1. Add to HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

2. Update CSS:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

**Other Popular Fonts:**
- Poppins
- Roboto
- Open Sans
- Inter
- Playfair Display (for headings)

### Change Button Styles

Find `.btn-primary` in `styles.css`:

```css
.btn-primary {
    background-color: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
}

.btn-primary:hover {
    background-color: #e55a2b;  /* Darker shade for hover */
}
```

---

## 🖼️ Add a Profile Picture

### Step 1: Prepare Image
1. Take/find a professional photo
2. Resize to 300x300px or 400x400px
3. Save as `profile.jpg` in `assets/images/`

### Step 2: Add to HTML

Add this in the about section:

```html
<div class="profile-image-container">
    <img src="assets/images/profile.jpg" alt="Your Name" class="profile-image">
</div>
```

### Step 3: Add Styling

Add to `styles.css`:

```css
.profile-image-container {
    margin: 0 auto 2rem;
    width: 250px;
    height: 250px;
}

.profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-color);
    box-shadow: var(--shadow-lg);
}
```

---

## 🔗 Update Social Links

Find the social links section and update URLs:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/YOUR-USERNAME" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/YOUR-USERNAME" target="_blank">
        <i class="fab fa-github"></i>
    </a>
    <a href="mailto:YOUR-EMAIL@example.com">
        <i class="fas fa-envelope"></i>
    </a>
</div>
```

---

## 📱 Add Sections

### Add a New Project

Copy this and paste in the projects grid:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your New Project</h3>
        <div class="project-tags">
            <span>Tech1</span>
            <span>Tech2</span>
        </div>
    </div>
    <p class="project-description">
        Describe your project
    </p>
    <div class="project-features">
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
        </ul>
    </div>
    <div class="project-footer">
        <small>Month Year</small>
    </div>
</div>
```

### Add a New Skill

Find a skill category and add:

```html
<span class="skill-tag">Your New Skill</span>
```

---

## 🎯 Advanced Customization

### Change Hero Background

Find `.hero` in `styles.css`:

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change these hex colors to your preferred gradient */
}
```

**Gradient Generator:** Use [gradient.style](https://gradient.style/)

### Adjust Section Padding

```css
.about {
    padding: 80px 20px;  /* Change 80px to more/less for padding */
}
```

### Change Animation Speed

Find animations in `script.js`:

```javascript
@keyframes fadeInUp {
    /* Currently 0.6s, change this to 0.3s (faster) or 1s (slower) */
    animation: fadeInUp 0.6s ease-out forwards;
}
```

---

## 🔍 SEO Optimization

Open `index.html` and update:

```html
<meta name="description" content="Sneha Dhole - Full Stack Developer & QA Engineer specializing in Python, React, and Node.js">

<meta name="keywords" content="developer, full stack, software engineer, react, python, portfolio">

<meta name="author" content="Sneha Dhole">

<!-- Optional: Add a favicon -->
<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
```

---

## ✨ Fine-Tuning Tips

1. **Check Consistency** - Keep colors, fonts, and spacing consistent
2. **Mobile First** - Test on mobile after changes
3. **Contrast** - Ensure text is readable on backgrounds
4. **Whitespace** - Use padding/margin to create breathing room
5. **Load Speed** - Keep image sizes reasonable (< 200KB each)
6. **Accessibility** - Keep alt text, use semantic HTML

---

## 🧪 Testing Your Changes

After making changes:

1. Save the file
2. Refresh browser (Ctrl+R or Cmd+R)
3. Hard refresh cache (Ctrl+F5 or Cmd+Shift+R)
4. Test on mobile view (F12 → Toggle device toolbar)
5. Check all links work

---

## 📋 Content Tips for Placements

**Do's:**
- ✅ Use action words: "Developed", "Built", "Implemented"
- ✅ Include numbers: "5 projects", "20% faster"
- ✅ Be specific about tech used
- ✅ Highlight your role clearly
- ✅ Use professional tone

**Don'ts:**
- ❌ Don't use unprofessional language
- ❌ Don't make claims you can't back up
- ❌ Don't use outdated technologies
- ❌ Don't overcrowd sections
- ❌ Don't use generic descriptions

---

## 🎓 Recommended Portfolio Content

For each project, include:
1. **Project Name** - Clear and descriptive
2. **Tech Stack** - Languages and frameworks used
3. **Description** - What does it do? (2-3 sentences)
4. **Key Features** - 3-4 main features/accomplishments
5. **Date** - When you completed it
6. **Link** (optional) - To GitHub repo or live demo

---

## 🚀 Next Steps

1. [ ] Customize personal information
2. [ ] Update skills and projects
3. [ ] Change colors/fonts to your preference
4. [ ] Add profile picture
5. [ ] Test on desktop and mobile
6. [ ] Deploy to GitHub Pages
7. [ ] Share with others for feedback
8. [ ] Keep updating with new projects

---

Need help? Check the README.md or DEPLOYMENT.md files!
