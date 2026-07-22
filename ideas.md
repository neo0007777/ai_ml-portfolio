# AI/ML Engineer Portfolio - Design System

## Design Reference
This portfolio extends the **Lithos** landing page design—a premium, dark-themed hero with cursor-following spotlight reveal mechanic. The design language is modern, minimal, and sophisticated, targeting top-tier AI/ML engineers applying to companies like OpenAI, Anthropic, Google DeepMind, NVIDIA, and Microsoft AI.

## Design System Analysis

### Typography
- **Display Font**: Playfair Display (italic) for wordmarks, section titles, and emphasis
- **Body Font**: Inter (300-700 weights) for all UI and body text
- **Hierarchy**: Large, bold display text paired with refined body copy; generous line spacing

### Color Palette
- **Primary Background**: Black (`#000000`) for hero; dark gradients for depth
- **Accent Color**: Warm orange (`#e8702a`) for CTAs and interactive elements
- **Text**: White for primary text; `rgba(255,255,255,0.8)` for secondary; `rgba(255,255,255,0.5)` for tertiary
- **Subtle Surfaces**: Dark grays with minimal contrast for cards and sections
- **Borders**: Soft white/gray with low opacity for subtle separation

### Spacing & Layout
- **Generous whitespace**: Sections separated by 80-120px vertical spacing
- **Padding**: 40-60px on desktop, 20-30px on mobile
- **Grid**: Asymmetric layouts; avoid centered grids where possible
- **Container**: Max-width ~1280px with responsive padding

### Visual Elements
- **Shadows**: Soft, subtle shadows (0 10px 30px rgba(0,0,0,0.3))
- **Borders**: Minimal; soft white/gray borders at 10-20% opacity
- **Radius**: Moderate border radius (8-12px) for cards; full radius for buttons
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur for depth

### Animations
- **Entrance**: Blur-rise effect (0% opacity + 28px translateY + 12px blur → 100% opacity + 0 translateY + 0 blur)
- **Timing**: 1.1s cubic-bezier(0.16,1,0.3,1) for reveals; 1s for fade-ups; 1.8s for zoom-outs
- **Stagger**: 150-250ms between sequential elements
- **Hover**: Scale 1.03 with shadow glow; 160ms ease-out transitions
- **Scroll**: Smooth scroll behavior; subtle parallax on hero images

### Button Styles
- **Primary CTA**: Orange background (`#e8702a`), white text, full radius, hover scale 1.03
- **Secondary**: White/transparent background with border, hover bg-white/20
- **Sizes**: `px-7 py-3` for large; `px-4 py-1.5` for small

### Card Styles
- **Project Cards**: Dark background with subtle border, image on top, content below
- **Skill Cards**: Minimal design; icon + label; hover lift effect
- **Timeline Items**: Vertical line with offset content; alternating left/right on desktop

### Interaction Patterns
- **Cursor Spotlight**: Soft circular reveal on hero (260px radius with radial gradient fade)
- **Hover Effects**: Subtle scale, shadow glow, color transitions
- **Scroll Reveals**: Fade-in + slide-up as elements enter viewport
- **Active States**: Underline or background color for nav items

## Pages to Build

1. **Home (Hero)** - Cursor-spotlight reveal, intro, social links, CTA buttons
2. **About** - Personal journey, education, interests, timeline
3. **Projects** - Featured AI/ML projects with filters, tech stacks, demo/GitHub links
4. **Skills** - Categorized technical skills with proficiency indicators
5. **Experience** - Timeline of internships, open source, research, leadership
6. **Achievements** - Hackathons, competitions, certifications, awards
7. **Blog** - Technical articles and AI write-ups
8. **Contact** - Contact form, social links, resume download

## Brand Essence
**Positioning**: Premium AI/ML engineer portfolio for top-tier opportunities
**Personality**: Professional, sophisticated, technical, forward-thinking
**Voice**: Clear, direct, technical but accessible; no generic filler
**Signature Color**: Warm orange (`#e8702a`) for CTAs and accents
**Logo**: Geometric symbol (no text) on transparent background

## Responsive Behavior
- **Desktop**: Full-width layouts with generous spacing; multi-column grids
- **Tablet**: Adjusted padding and font sizes; 2-column layouts
- **Mobile**: Single-column layouts; full-width cards; adjusted typography
- **Hero Text**: 5xl (mobile) → 7xl (tablet) → 8xl (desktop)
- **Navigation**: Center pill nav hidden below md; hamburger menu on mobile

## Key Principles
1. **Consistency**: Every page feels like it was designed on the same day
2. **Premium Feel**: Subtle depth, careful spacing, refined typography
3. **Minimal Clutter**: Generous whitespace; content-focused layouts
4. **Interactive Polish**: Smooth animations, responsive hover effects, scroll reveals
5. **Accessibility**: Clear hierarchy, sufficient contrast, keyboard navigation
6. **Performance**: Optimized images, lazy loading, smooth animations
