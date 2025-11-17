# Youth as Teacher Educators

An interactive educational website for preservice teacher education programs that teaches equity-oriented, youth-centered approaches to science and engineering education based on Dr. Christina Restrepo Nazar's award-winning research.

## Overview

This website provides comprehensive resources for preservice teachers to learn how to center youth knowledge, engage with community wisdom, and implement equity-oriented STEM teaching practices. It is based on peer-reviewed research on youth-participatory approaches to teacher education.

## Features

### 5 Comprehensive Tabs

1. **Theoretical Frameworks** - Epistemological foundations including:
   - Youth as Knowledge Producers
   - Multiple Epistemologies Framework
   - Rightful Presence vs. Equity as Inclusion
   - Critical Epistemologies of Place
   - Counternarratives vs. Master Narratives

2. **Youth as Teacher Educators** - Dr. Nazar's dissertation research:
   - Three interconnected studies
   - Youth counternarratives exploration
   - Teaching imaginaries development
   - Classroom enactment case studies
   - Youth-created multimodal cases (Faith, Christopher, AD)

3. **Engaging Engineering in Place** - Localizing engineering with community wisdom:
   - Critical Epistemologies of Place framework
   - Faith's Fancy Hat (wearable engineering)
   - Christopher's Anti-Bullying App
   - Place-based project builder

4. **Practice-Based Approaches** - Pedagogical tools and methodologies:
   - Social Design Experiments
   - Community Ethnography as Pedagogy
   - Youth-Participatory Action Research (YPAR)
   - Engineering for Sustainable Communities
   - Navigating Multiple Epistemologies

5. **Resources & Reflection** - Self-assessment and materials:
   - Progress tracking dashboard
   - Self-assessment tools
   - Downloadable templates and guides
   - Academic readings and citations
   - Reflection journal

### Interactive Features

- **Glossary Tooltips** - Hover over key terms for definitions and examples
- **Interactive Scenarios** - Make teaching decisions and receive feedback
- **Animations** - Smooth transitions and engaging visual explanations
- **Progress Tracking** - Local storage tracks completion and bookmarks
- **Reflection Journal** - Save reflections with guided prompts
- **Self-Assessment Tools** - Evaluate your equity-oriented teaching practice

## Technology Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Icons:** Lucide React
- **State Management:** React Hooks + Local Storage

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd youth-teacher-educators
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── GlossaryTooltip.tsx
│   ├── Navigation.tsx
│   ├── Layout.tsx
│   ├── ProgressBar.tsx
│   └── Section.tsx
├── pages/           # Main page components for each tab
│   ├── TheoreticalFrameworks.tsx
│   ├── YouthAsEducators.tsx
│   ├── EngineeringInPlace.tsx
│   ├── PracticeBasedApproaches.tsx
│   └── Resources.tsx
├── data/            # Static data and content
│   ├── glossary.ts  # Glossary terms and definitions
│   └── tabs.ts      # Tab configuration
├── hooks/           # Custom React hooks
│   └── useProgress.ts
├── utils/           # Utility functions
│   └── storage.ts   # Local storage helpers
├── types/           # TypeScript type definitions
│   └── index.ts
├── App.tsx          # Main app component with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` directory to Netlify:
   - Drag and drop the `dist` folder to Netlify Drop
   - Or connect your Git repository and set:
     - Build command: `npm run build`
     - Publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your Git repository on the Vercel dashboard.

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/youth-teacher-educators",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` to set the base path:
```typescript
export default defineConfig({
  base: '/youth-teacher-educators/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Key Research Sources

This website is based on the following research:

- **Nazar, C. R.** (2018). *Youth as Teacher Educators: Supporting Preservice Teachers in Developing Youth-Centered, Equity-Oriented Science Teaching Practices.* Ph.D. Dissertation, Michigan State University. [Winner of 2020 AACTE Outstanding Dissertation Award]

- **Nazar, C. R., Calabrese Barton, A., Morris, C., & Tan, E.** (2019). Critically engaging engineering in place by localizing counternarratives in engineering design. *Science Education, 103*(3), 638-664.

- **Calabrese Barton, A., & Tan, E.** (2020). Beyond equity as inclusion: A framework of "rightful presence" for guiding justice-oriented studies in teaching and learning. *Educational Researcher, 49*(6), 433-440.

- **Tan, E., Calabrese Barton, A., & Benavides, A.** (2019). Engineering for sustainable communities: Epistemic tools in support of equitable and consequential middle school engineering. *Science Education, 103*(4), 1011-1046.

## License

This project is created for educational purposes based on publicly available research.

## Contact

For questions about the research, please contact Dr. Christina Restrepo Nazar at California State University, Los Angeles.

## Development

Built with React + TypeScript + Vite

- React 19 with TypeScript for type-safe components
- Vite for fast development and optimized builds
- Tailwind CSS v4 for styling
- Framer Motion for smooth animations
- React Router for client-side routing
