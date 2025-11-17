# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Thinker Place** - Educational platform repository

### Subproject: Youth as Teacher Educators

Located in `youth-teacher-educators/`, this is an interactive educational website for preservice teacher education programs. It teaches equity-oriented, youth-centered approaches to science and engineering education based on Dr. Christina Restrepo Nazar's award-winning research.

## Development Commands

### Youth as Teacher Educators Website

```bash
cd youth-teacher-educators
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:5173)
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

## Technology Stack

### Youth as Teacher Educators
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: React Hooks + Local Storage

## Architecture

### Youth as Teacher Educators Website

**Component-Based Architecture:**
- Reusable UI components in `src/components/`
- Page components for each tab in `src/pages/`
- Custom hooks in `src/hooks/`
- Type definitions in `src/types/`
- Utility functions in `src/utils/`
- Static data in `src/data/`

**Key Design Patterns:**
- **Local Storage for State**: Progress tracking, bookmarks, and reflections stored in browser local storage
- **Glossary Tooltip System**: Hover tooltips for key terminology throughout the site
- **Tab-Based Navigation**: Five main tabs with React Router for client-side routing
- **Progress Tracking**: Automatic section completion tracking and visual progress indicators
- **Interactive Learning**: Scenario-based activities, quizzes, and self-assessments

**Content Organization:**
1. **Theoretical Frameworks** - Epistemological foundations
2. **Youth as Teacher Educators** - Dr. Nazar's research
3. **Engaging Engineering in Place** - Community-based engineering
4. **Practice-Based Approaches** - Pedagogical methodologies
5. **Resources & Reflection** - Self-assessment and downloads

## Important Implementation Details

### Tailwind CSS v4
This project uses Tailwind CSS v4, which uses CSS imports rather than JavaScript config:
- Import via `@import "tailwindcss";` in `index.css`
- No `tailwind.config.js` file needed

### TypeScript Type Imports
When importing types, use `import type { TypeName }` syntax to comply with `verbatimModuleSyntax`:
```typescript
import type { ProgressData } from '../types';  // ✓ Correct
import { ProgressData } from '../types';        // ✗ Wrong
```

### Local Storage Schema
Progress data stored at key `youth-teacher-educators-progress`:
```typescript
{
  completedSections: string[],
  bookmarkedResources: string[],
  reflections: ReflectionEntry[],
  lastVisitedTab: string,
  startDate: string,
  lastAccessDate: string
}
```

## Content Sources

The website content is based on peer-reviewed research:
- Nazar, C. R. (2018). Youth as Teacher Educators [Dissertation, Michigan State University]
- Nazar et al. (2019). Critically engaging engineering in place. *Science Education*
- Calabrese Barton & Tan (2020). Rightful presence framework. *Educational Researcher*
- Related work on epistemologies of place, YPAR, and community ethnography

## Future Development

- Consider adding backend for user accounts and cross-device sync
- Add video content (currently has placeholder structure)
- Create actual PDF downloads for templates and guides
- Add more interactive scenarios and quizzes
- Implement accessibility testing and improvements
- Add unit tests for components and utils

## Deployment Options

- **Netlify**: Drag & drop `dist/` or connect Git repo
- **Vercel**: CLI deployment or Git integration
- **GitHub Pages**: Use gh-pages package (requires base path config)

See `youth-teacher-educators/README.md` for detailed deployment instructions.
