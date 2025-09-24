# CLAUDE.md - Personal Academic Website

This is a **Hugo-based academic personal website** built with the **Wowchemy Academic theme** and deployed via **Netlify**. The site belongs to Yuxin Zhu, Assistant Professor at Johns Hopkins University.

## Technology Stack
- **Static Site Generator**: Hugo v0.139.3+ (currently using v0.81.0 for Netlify)
- **Theme**: Wowchemy Academic (Hugo modules)
- **Language**: Go modules for Hugo
- **Deployment**: Netlify with automatic deployments
- **Domain**: www.yuxinzhu-daisybiostat.com

## Quick Commands

### Development
```bash
# Start development server with live reload
./view.sh
# OR
hugo server --disableFastRender --i18n-warnings

# Build for production
hugo --gc --minify

# Update Wowchemy theme and dependencies
./update_wowchemy.sh
# OR manually:
hugo mod get -u ./...
hugo mod tidy
```

### Content Management
```bash
# Create new content
hugo new content/post/my-new-post/index.md
hugo new content/publication/my-paper/index.md
hugo new content/project/my-project/index.md

# Check site structure
hugo list all
```

## Project Structure

### Core Directories
- `/config/_default/` - Hugo configuration files (YAML)
  - `config.yaml` - Main Hugo configuration
  - `params.yaml` - Wowchemy theme parameters
  - `menus.yaml` - Site navigation menus
  - `languages.yaml` - Language settings
- `/content/` - All site content (Markdown)
  - `/authors/admin/` - Main user profile (Yuxin Zhu)
  - `/home/` - Homepage widgets (about.md, skills.md, index.md)
  - `/post/` - Blog posts
  - `/publication/` - Academic publications
  - `/project/` - Research projects
  - `/event/` - Talks and events
- `/static/` - Static assets (images, files, uploads)
- `/data/` - Site data files (themes, fonts, page_sharer.toml)
- `/assets/` - Asset processing files

### Key Files
- `netlify.toml` - Netlify deployment configuration
- `go.mod` & `go.sum` - Hugo module dependencies
- `view.sh` - Local development server script
- `update_wowchemy.sh` - Theme update script
- `.editorconfig` - Code editor configuration

### Generated/Build Files (ignore these)
- `/public/` - Generated static site (after `hugo` build)
- `/resources/` - Hugo's resource cache
- `/exampleSite/` - Theme example files (reference only)

## Configuration Details

### Site Settings
- **Title**: "Yuxin Zhu"
- **Theme**: "minimal" with day/night toggle
- **Hugo Version**: 0.81.0 (Netlify), 0.139.3+ (local)
- **Language**: English (en)
- **Baseurl**: Currently empty (uses Netlify's URL)

### Content Organization
- **Homepage Widgets**: About, Skills (customizable in `/content/home/`)
- **Author Profile**: Located in `/content/authors/admin/_index.md`
- **Research Interests**: EHR, Misdiagnosis, Biomarkers, Tree-Based Methods
- **Affiliation**: Johns Hopkins University, Armstrong Institute

## Development Workflow

### Local Development
1. Use `./view.sh` to start development server
2. Edit content in `/content/` directory
3. Modify configuration in `/config/_default/`
4. Add assets to `/static/` directory
5. Test changes at `http://localhost:1313`

### Content Updates
- **Profile**: Edit `/content/authors/admin/_index.md`
- **Homepage**: Modify widgets in `/content/home/`
- **Add Publications**: Create new files in `/content/publication/`
- **Blog Posts**: Add to `/content/post/`

### Theme Updates
```bash
# Update to latest Wowchemy version
./update_wowchemy.sh

# Manual Hugo module updates
hugo mod get -u ./...
hugo mod tidy
hugo mod verify
```

### Deployment
- **Automatic**: Push to main branch triggers Netlify build
- **Build Command**: `hugo --gc --minify -b $URL`
- **Publish Directory**: `public`
- **Build Environment**: Hugo v0.81.0, Git info enabled

## Common Tasks

### Adding New Content
```bash
# New blog post
hugo new content/post/my-post-title/index.md

# New publication
hugo new content/publication/paper-name/index.md

# New project
hugo new content/project/project-name/index.md
```

### Updating Personal Information
- Edit `/content/authors/admin/_index.md` for bio, interests, education
- Modify `/config/_default/params.yaml` for contact info
- Update `/content/home/about.md` and `/content/home/skills.md` for homepage

### Asset Management
- Profile photos: `/content/authors/admin/avatar.jpg`
- Publication images: `/content/publication/[paper-name]/featured.jpg`
- General uploads: `/static/uploads/` or `/static/media/`

## Troubleshooting

### Common Issues
- **Build fails**: Check Hugo version compatibility in `netlify.toml`
- **Module errors**: Run `hugo mod tidy` to clean up dependencies
- **Content not showing**: Verify front matter format and file structure
- **Theme issues**: Run `./update_wowchemy.sh` to update theme

### Debug Commands
```bash
# Check Hugo modules
hugo mod graph
hugo mod verify

# Verbose build output
hugo --verbose

# Check content structure
hugo list all
```

## URLs and Resources
- **Live Site**: www.yuxinzhu-daisybiostat.com
- **Wowchemy Docs**: https://wowchemy.com/docs/
- **Hugo Docs**: https://gohugo.io/documentation/
- **Theme Updates**: https://wowchemy.com/updates/

## Notes for AI Assistants
- This is a personal academic website with no testing framework
- Content is primarily academic (publications, CV, research)
- Use Hugo commands for all site operations
- Always test changes locally with `./view.sh` before pushing
- Respect the existing Wowchemy theme structure
- When editing content, maintain front matter format consistency
- Profile updates go to `/content/authors/admin/_index.md`
- Homepage customizations go to `/content/home/` widgets