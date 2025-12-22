# Ethan Chang - React Portfolio

This is the **React version** of your personal portfolio website.

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Name & typing animation
│   │   ├── Contact.jsx      # Social media links
│   │   ├── About.jsx        # About section
│   │   ├── Experience.jsx   # Experience cards
│   │   ├── Projects.jsx     # Project cards with expand
│   │   └── Tools.jsx        # Tech stack grid
│   ├── data/                # JSON data files
│   │   ├── projects.json    # All project info
│   │   ├── experiences.json # All experience info
│   │   └── tools.json       # Tech stack info
│   ├── assets/              # Images
│   ├── App.jsx              # Main component
│   ├── App.css              # Main styles
│   └── main.jsx             # Entry point
└── public/                  # Static files
```

## 🚀 How to Run

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 How to Update Content

### Add a New Project

Edit `src/data/projects.json`:

```json
{
  "id": 4,
  "title": "New Project Name",
  "tech": ["React", "Node.js", "MongoDB"],
  "duration": "Jan 2026 - May 2026",
  "description": "Your project description here...",
  "tools": ["React", "Node.js", "Express", "MongoDB"],
  "githubUrl": "https://github.com/yourusername/project",
  "backgroundImage": "/images/project-bg.png"
}
```

React will automatically create a new project card!

### Add a New Experience

Edit `src/data/experiences.json`:

```json
{
  "id": 3,
  "title": "Job Title",
  "company": "Company Name",
  "duration": "Start - End",
  "location": "City, State",
  "summary": "Job description...",
  "skills": ["Skill1", "Skill2"],
  "logo": "/images/company-logo.png",
  "url": "https://company.com"
}
```

### Add a New Tool

Edit `src/data/tools.json`:

```json
{
  "id": 9,
  "name": "React",
  "logo": "/images/react.png",
  "url": "https://reactjs.org"
}
```

## 🎨 Styling

- CSS is in `src/App.css` (converted from your original `style.css`)
- All animations, colors, and effects are preserved
- Shooting stars background included!

## 🔄 Benefits of React Version

1. **Easy Updates** - Edit JSON instead of HTML
2. **Reusable Components** - One component for all projects
3. **State Management** - Expand/collapse works automatically
4. **No Code Duplication** - DRY principle
5. **Easy to Extend** - Add search, filter, sorting easily

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

