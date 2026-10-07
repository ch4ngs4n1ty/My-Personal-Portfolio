# 📝 How to Update Your Portfolio

Your portfolio is now powered by React + JSON! Just edit the JSON files to add/update content.

## 🎨 Add a New Project

Open `src/data/projects.json` and add:

```json
{
  "id": 4,
  "title": "Your New Project",
  "tech": ["React", "Node.js", "MongoDB"],
  "duration": "January 2026 - May 2026",
  "description": "Amazing project description here...",
  "tools": ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  "githubUrl": "https://github.com/yourusername/project",
  "backgroundImage": "/images/your-project-bg.png",
  "artifacts": [
    {
      "type": "image",
      "src": "/images/your-diagram.png",
      "alt": "Project Diagram"
    }
  ]
}
```

**That's it!** React will automatically create a new project card! ✅

## 💼 Add a New Experience

Open `src/data/experiences.json` and add:

```json
{
  "id": 3,
  "title": "Software Engineer",
  "company": "Company Name Inc.",
  "duration": "June 2026 - Present",
  "location": "City, State - Remote",
  "summary": "Your job description and accomplishments...",
  "skills": ["React", "Node.js", "AWS", "Leadership"],
  "logo": "/images/company-logo.png",
  "url": "https://company.com"
}
```

React will add it to your experiences section! ✅

## 🛠️ Add a New Tool/Technology

Open `src/data/tools.json` and add:

```json
{
  "id": 8,
  "name": "React",
  "logo": "/images/react.png",
  "url": "https://reactjs.org"
}
```

New tool card appears automatically! ✅

## 📸 Add Images

1. Put your images in `public/images/` folder
2. Reference them in JSON as `/images/filename.png`
3. React finds them automatically!

## 📄 Update Your Resume

Don't upload a PDF: edit `resume/resume.tex` and push to `main`.

GitHub Actions (`.github/workflows/deploy.yml`) compiles it, commits the new
`public/Chang_Ethan_Resume.pdf` back to the repo, rebuilds the site and redeploys it. Run
`git pull` afterwards to get that PDF commit locally.

The top of `resume.tex` lists the building blocks (`\entry`, `\project`,
`highlights`, `\cat`). To preview locally, run `npm run resume`
(needs `tectonic` or `latexmk`, e.g. `brew install tectonic`).

## 🚀 Deploying

Every push to `main` deploys the site automatically; `npm run deploy` is no
longer needed. The chat worker is separate: after changing projects or
experiences, run `cd worker && npx wrangler deploy` so the chatbot knows about them.

## 🎯 JSON Field Explanations

### Projects
- `id`: Unique number (increment from last)
- `title`: Project name
- `tech`: Array of main technologies (shows as colored text)
- `duration`: Date range
- `program`: (Optional) Program name like "AIBIDS Program"
- `description`: Full project description
- `tools`: Array of ALL tools used (shows in highlighted box)
- `githubUrl`: GitHub link (use `null` if no link yet)
- `backgroundImage`: Path to background image
- `glyph`: (Collection projects) line-art motif for the archive plate — one of `dip`, `schema`, `secure`, `hand`, `race`, `fire`, `path`, `hop`, `ess`, `racing`, `stack`, `tree`, `cluster`, `threshold` (see `src/components/ProjectGlyph.jsx`). Omit it and a constellation is drawn from the title.
- `artifacts`: Array of images/diagrams (optional)

### Experiences
- `id`: Unique number
- `title`: Job title
- `company`: Company name
- `duration`: Date range
- `location`: City, State - Work type
- `summary`: Job description paragraph
- `skills`: Array of key skills
- `logo`: Company logo path
- `url`: Company website (optional)

### Tools
- `id`: Unique number
- `name`: Tool/tech name
- `logo`: Logo image path
- `url`: Official website (use `null` if none)

## ⚡ See Changes Instantly

1. Save your JSON file
2. React automatically reloads
3. See your new content immediately!

**No HTML editing needed!** 🎉

## 🔍 Example: Complete Project Entry

```json
{
  "id": 4,
  "title": "E-Commerce Platform",
  "tech": ["React", "Node.js", "MongoDB", "Stripe"],
  "duration": "March 2026 - July 2026",
  "description": "Built a full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Implemented secure checkout flow using Stripe API and real-time inventory management.",
  "tools": ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Redux", "Tailwind CSS"],
  "githubUrl": "https://github.com/ch4ngs4n1ty/ecommerce",
  "backgroundImage": "/images/ecommerce-bg.png",
  "artifacts": [
    {
      "type": "image",
      "src": "/images/ecommerce-architecture.png",
      "alt": "System Architecture Diagram"
    },
    {
      "type": "image",
      "src": "/images/ecommerce-screenshot.png",
      "alt": "Platform Screenshot"
    }
  ]
}
```

## 📚 Tips

- Keep `id` numbers unique and sequential
- Use `/images/` prefix for all image paths
- Arrays use brackets `[]` and commas between items
- Strings use quotes `""`
- Use `null` for missing optional values
- Don't forget commas between JSON objects!

That's it! Your portfolio is now super easy to maintain! 🚀

