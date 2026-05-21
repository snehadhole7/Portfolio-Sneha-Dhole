# 🚀 Deployment Guide - GitHub Pages

This guide will help you get your portfolio live on GitHub Pages in minutes!

## Prerequisites
- A GitHub account (free at [github.com](https://github.com))
- Git installed on your computer
- Your portfolio files ready

## Step-by-Step Deployment

### 1️⃣ Create a GitHub Repository

**Option A: Using GitHub Website**
1. Go to [github.com/new](https://github.com/new)
2. Enter repository name: `portfolio` (or any name you prefer)
3. Add description: "My Professional Portfolio Website"
4. Select **Public** (required for free GitHub Pages)
5. ✅ Click "Create repository"

**Option B: Using Command Line**
```bash
# You can skip this if you used Option A
```

### 2️⃣ Upload Your Files

**Option A: Using Command Line (Recommended)**

```bash
# Navigate to your portfolio folder
cd "c:\Users\Vaibhav Dhole\OneDrive\Desktop\Portfolio-Sneha-Dhole"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Option B: Using GitHub Desktop**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Click "Create a New Repository on Your Hard Drive"
3. Choose your portfolio folder
4. Create the repository
5. Publish to GitHub
6. Push changes

**Option C: Using GitHub Web Interface**
1. Go to your repository on github.com
2. Click "Add file" → "Upload files"
3. Drag and drop all your files:
   - index.html
   - styles.css
   - script.js
   - README.md
   - .gitignore
   - assets/ folder (if you have images)
4. Commit the files

### 3️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **"Pages"** section on the left menu
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. 💾 Click **Save**
6. Wait 1-2 minutes for deployment
7. You'll see a message: "Your site is published at `https://YOUR-USERNAME.github.io/portfolio`"

### 4️⃣ Access Your Portfolio

Your portfolio will be live at:
```
https://YOUR-USERNAME.github.io/portfolio
```

Or if you named your repository the same as your username:
```
https://YOUR-USERNAME.github.io
```

## 🔄 Making Updates

After your site is live, you can update it anytime:

**Using Command Line:**
```bash
# Make changes to your files locally
# Then:

git add .
git commit -m "Update portfolio with new project"
git push
```

**Using GitHub Web Interface:**
1. Click on the file you want to edit
2. Click the pencil icon ✏️
3. Make your changes
4. Commit the changes

Changes will be live within 1-2 minutes!

## 🎯 Custom Domain (Optional)

To use your own domain instead of github.io:

1. Buy a domain from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains

2. In your repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Update your domain's DNS settings to point to GitHub

(Detailed instructions will be provided by GitHub)

## ✅ Testing Checklist

After deployment, verify:
- [ ] Website loads at GitHub Pages URL
- [ ] All sections are visible (About, Skills, Projects, Contact)
- [ ] Navigation links work
- [ ] Mobile view looks good (test on phone)
- [ ] Social links work
- [ ] Contact form opens email client
- [ ] No broken images

## 🆘 Troubleshooting

### Site not showing?
1. Check Settings → Pages - is it enabled?
2. Wait 1-2 minutes, then refresh
3. Clear browser cache (Ctrl+Shift+Del)

### Old version showing?
1. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Try in private/incognito window

### Repository not found?
```bash
# Check your remote URL
git remote -v

# If wrong, update it
git remote set-url origin https://github.com/YOUR-USERNAME/portfolio.git

# Try pushing again
git push -u origin main
```

### Build failed?
1. Check that index.html is in the root folder
2. Make sure file names match in links (HTML, CSS, JS)
3. Check for special characters in file names

## 🔐 Security Tips

1. Don't commit sensitive information (API keys, passwords)
2. Use `.gitignore` to exclude files
3. Review what you're pushing with `git status`
4. Keep your GitHub password secure

## 📱 Mobile Testing

Before sharing, test on mobile:
1. Open your portfolio on your phone
2. Check navigation works
3. Verify text is readable
4. Test form submission

## 🎉 You're Done!

Your portfolio is now live! Share it with:
- Hiring managers
- LinkedIn profile
- Resume
- Portfolio platforms
- Social media

## 📞 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community](https://github.community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

**Happy job hunting!** 🚀✨
