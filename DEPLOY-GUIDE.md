# 🚀 GitHub Pages Deployment Guide

## ✅ Setup Complete!

Your React portfolio is now configured for GitHub Pages deployment!

---

## 📁 **Current Structure**

```
Personal Portfolio Website/ (ROOT)
├── src/                        # React source files
├── public/                     # Static assets
├── portfolio-html-backup/      # ✅ Your HTML backup (safe!)
├── Index Images/               # Your images folder
├── node_modules/               # Dependencies
├── package.json                # Configured for deployment
├── vite.config.js              # Configured with base path
└── index.html                  # React entry point
```

---

## 🌐 **Deployment Steps**

### **Step 1: Make sure your repo is set up**

If you haven't already pushed this to GitHub:

```bash
git init
git add .
git commit -m "Initial React portfolio setup"
git remote add origin https://github.com/ch4ngs4n1ty/ch4ngs4n1ty.github.io.git
git push -u origin main
```

### **Step 2: Deploy to GitHub Pages**

Run this single command:

```bash
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Create an optimized production build in `dist/`
3. Push the build to the `gh-pages` branch
4. GitHub Pages will automatically serve it!

### **Step 3: Configure GitHub Pages (First Time Only)**

1. Go to your repo: `https://github.com/ch4ngs4n1ty/ch4ngs4n1ty.github.io`
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### **Step 4: View Your Live Site!**

After 1-2 minutes, your portfolio will be live at:

🌐 **https://ch4ngs4n1ty.github.io**

---

## 🔄 **Updating Your Portfolio**

### **For New Projects, Experiences, or Tools:**

1. **Edit the JSON files:**
   - `src/data/projects.json`
   - `src/data/experiences.json`
   - `src/data/tools.json`

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to preview

3. **Deploy:**
   ```bash
   npm run deploy
   ```

That's it! Changes will be live in 1-2 minutes! ✨

---

## 📝 **Available Commands**

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | 🚀 Build and deploy to GitHub Pages |

---

## 🎯 **Quick Reference**

### **Add a New Project:**
```json
// src/data/projects.json
{
  "id": 4,
  "title": "My New Project",
  "duration": "Jan 2026 - Present",
  "description": "Description here...",
  "tools": ["React", "Node.js"],
  "githubUrl": "https://github.com/...",
  "backgroundImage": "/images/new-project-bg.png",
  "artifacts": []
}
```

Then: `npm run deploy` 🚀

### **Add a New Experience:**
```json
// src/data/experiences.json
{
  "id": 3,
  "title": "Software Engineer",
  "company": "Tech Company",
  "duration": "Jan 2026 - Present",
  "location": "San Francisco, CA",
  "summary": "Summary here...",
  "skills": ["JavaScript", "React"],
  "logo": "/images/company-logo.png",
  "url": "https://company.com"
}
```

Then: `npm run deploy` 🚀

---

## 🛡️ **Backup Location**

Your original HTML portfolio is safely backed up in:
```
portfolio-html-backup/
├── index.html
├── style.css
├── experiences.html
└── Index Images/
```

---

## 💡 **Tips**

- Always test locally with `npm run dev` before deploying
- Commit your changes to git before deploying
- The `gh-pages` branch is auto-generated, don't edit it directly
- Your portfolio URL will be: `https://ch4ngs4n1ty.github.io`

---

## 🆘 **Troubleshooting**

**404 Error after deployment?**
- Check GitHub Pages settings (Settings → Pages)
- Make sure branch is set to `gh-pages`
- Wait 1-2 minutes for deployment to complete

**Images not showing?**
- Make sure images are in `public/images/`
- Use paths like `/images/filename.png` in JSON files

**Need help?**
- Check the build: `npm run build`
- Preview locally: `npm run preview`
- Check console for errors (F12 in browser)

---

## 🎉 **You're All Set!**

Your portfolio is production-ready! Just run `npm run deploy` to go live! 🚀

