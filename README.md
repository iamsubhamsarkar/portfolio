# My Portfolio Website

A modern, responsive personal portfolio website with CI/CD deployment to GitHub Pages.

## Features

- ✅ Clean, responsive design
- ✅ Git version control from day 1
- ✅ Automatic deployment via GitHub Actions
- ✅ GitHub Pages hosting (unlisted mode ready)
- ✅ Smooth navigation
- ✅ Mobile-friendly

## Tech Stack

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- GitHub Pages (hosting)
- GitHub Actions (CI/CD)

## Getting Started

### Prerequisites

- Git installed
- GitHub account

### Setup Instructions

1. **Clone this repository** (if working from GitHub)
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Local Development**
   - Edit `index.html` to add your content
   - Customize `styles.css` with your branding
   - Enhance `script.js` with interactions

3. **Git Workflow**
   ```bash
   # Stage changes
   git add .
   
   # Commit with descriptive message
   git commit -m "feat: add about section"
   
   # Push to GitHub
   git push origin main
   ```

4. **View Your Site**
   - After pushing to GitHub, the site auto-deploys
   - GitHub Pages URL: `https://yourusername.github.io/portfolio`
   - Or visit Settings > Pages to see your live URL

## Continuous Integration & Deployment (CI/CD)

The `.github/workflows/deploy.yml` file handles automatic deployment:

- Triggers on every push to `main` branch
- Validates HTML structure
- Automatically deploys to GitHub Pages
- No manual deployment needed!

## Development Roadmap

### Phase 1: Basic Structure (Current)
- ✅ Static HTML structure
- ✅ Basic CSS styling
- ✅ Smooth scroll navigation
- ✅ Git & GitHub setup

### Phase 2: Enhance Styling
- Add animations and transitions
- Implement dark mode toggle
- Improve typography
- Add project showcase gallery

### Phase 3: Add Interactivity
- Contact form (with validation)
- Project filters
- Skill categorization
- Theme customization

### Phase 4: Make it Dynamic
- Backend API integration
- Database for projects
- Blog section
- Admin panel for content management

### Phase 5: Advanced Features
- Search functionality
- Analytics tracking
- SEO optimization
- Progressive Web App (PWA)

## How to Make Changes & Deploy

1. **Edit locally**
   ```bash
   vim index.html  # or any editor
   ```

2. **Test in browser**
   - Open `index.html` in your browser
   - Or use VS Code Live Server

3. **Commit & Push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

4. **Auto-deployment happens**
   - GitHub Actions runs automatically
   - Site updates in seconds
   - No additional steps needed!

## GitHub Pages Configuration

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` / `root`
5. Wait for deployment to complete
6. Your site URL will appear at the top

### Keep Site Unlisted

While learning and developing:
- Repository can be private or public
- GitHub Pages site is accessible only via direct link
- No search engine indexing until you configure it
- Perfect for gradual development!

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── script.js               # JavaScript interactions
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD workflow
```

## Best Practices

1. **Commit Frequently**: Small, meaningful commits with clear messages
   ```bash
   git commit -m "feat: add skills section" # Not "update files"
   ```

2. **Use Branches for Major Changes** (as you grow)
   ```bash
   git checkout -b feature/new-feature
   git push origin feature/new-feature
   # Create Pull Request on GitHub
   ```

3. **Keep Main Branch Deployable**: Only merge tested changes

4. **Regular Updates**: Keep your portfolio fresh
   - Update projects quarterly
   - Refresh skills section regularly
   - Add recent achievements

## Troubleshooting

### Site not updating after push?
- Wait 30-60 seconds (GitHub needs to process)
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check Actions tab on GitHub for any errors

### 404 on GitHub Pages?
- Verify `gh-pages` branch exists and has latest code
- Check Settings → Pages → Source is correct
- Ensure repository name doesn't have special characters

### Changes not showing?
- Make sure you're on the `main` branch: `git branch`
- Verify push was successful: Check GitHub repository
- Clear browser cache

## Next Steps

1. **Personalize Content**
   - Update your name and title
   - Add your bio
   - List your actual projects
   - Add real contact info

2. **Add Your Projects**
   - Describe your best work
   - Add project links
   - Include screenshots (future enhancement)

3. **Customize Design**
   - Change color scheme in `styles.css`
   - Adjust fonts
   - Add your own images

4. **Share Your Link**
   - Your GitHub Pages URL is public
   - Share in resume, LinkedIn, etc.
   - It updates automatically as you improve it!

## Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [HTML/CSS/JS Tutorial](https://www.w3schools.com/)
- [Git Cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

## License

This project is open source and available under the MIT License.

---

**Happy coding!** 🚀 Remember: Every commit is a step towards a better portfolio.
