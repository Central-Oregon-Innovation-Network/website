# Central Oregon Innovation Network - Website Project Plan

## Project Overview
Building a modern, high-quality marketing website for the Central Oregon Innovation Network (COIN) - an organization focused on empowering tech startups in Central Oregon through events, connections, education, and visibility.

## Tech Stack

### Core Framework
- **Next.js 14** with App Router
- **React 18** with client components only (no SSR for marketing site)
- **TypeScript** for type safety and better developer experience

### Styling & Design System
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations and transitions
- **Lucide React** for consistent, modern icons
- **Custom CSS variables** for brand colors and typography

### UI Components
- **Radix UI** primitives for accessible, unstyled components
- **Custom component library** built on top of Radix
- **Responsive design** with mobile-first approach

### Development Tools
- **ESLint** + **Prettier** for code quality and formatting
- **TypeScript** strict mode
- **Git** for version control

### External Integrations
- **Google Calendar API** for live event integration
- **Email service** for newsletter signups (Mailchimp, ConvertKit, or similar)

## Design System & Branding

### Color Palette
Based on the screenshots, we'll use:
- **Primary**: Deep blues (#1e3a8a, #1e40af) for CTAs and headers
- **Secondary**: Clean whites (#ffffff) and light grays (#f8fafc, #e2e8f0)
- **Accent**: Natural greens (#059669) inspired by Central Oregon landscapes
- **Text**: Dark grays (#1f2937, #374151) for readability
- **Background**: Pure white (#ffffff) with subtle gradients

### Typography
- **Primary Font**: Inter or similar modern sans-serif
- **Hierarchy**: Clear heading sizes (h1: 4xl, h2: 3xl, h3: 2xl, etc.)
- **Weight**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Layout Principles
- **Clean & Minimalist**: Generous white space, uncluttered design
- **Hero-First**: Large, impactful hero sections with stunning Central Oregon imagery
- **Two-Column Layouts**: Balanced content presentation
- **Mobile-Responsive**: Seamless experience across all devices

## Page Structure & Features

### 1. Homepage
- **Hero Section**: Full-width Central Oregon landscape with overlay text
- **Mission Statement**: "Empowering the innovation community in Central Oregon"
- **Call-to-Action**: "Join Us!" and "About Us" buttons
- **Supporting Organizations**: Highlight key organizations that support COIN
- **Community Showcase**: Featured events and communities
- **Newsletter Signup**: Keep users engaged

### 2. About Page
- **Mission & Vision**: Clear articulation of COIN's purpose
- **Community Champions**: Highlight the people who have truly helped push the community forward
- **Impact Stories**: Success stories from local startups
- **Values**: What drives the organization

### 3. Events Page
- **Google Calendar Integration**: Live calendar showing all COIN events
- **Upcoming Events**: Event listings from connected Google Calendar
- **Event Categories**: Tech talks, pitch competitions, networking
- **Newsletter Signup**: Join newsletter to stay updated on events
- **Past Events**: Archive and highlights

### 4. Communities Page
- **Tech Startup Focus**: Entirely focused on tech startup community
- **Community Leaders**: Meet the people driving the tech community
- **Join Community**: Clear pathways to get involved in tech startup ecosystem
- **Resources**: Tech startup-specific tools and connections

### 5. Resources Page (Hidden from Navigation)
- **Startup Toolkit**: Essential resources for founders
- **Mentorship Programs**: Connect with experienced entrepreneurs
- **Funding Opportunities**: Local and regional funding sources
- **Co-working Spaces**: Physical locations for collaboration

### 6. Sponsors Page
- **Sponsor Showcase**: Featured partners and supporters
- **Sponsorship Opportunities**: How to become a sponsor
- **Partner Benefits**: What sponsors get in return
- **All Sponsors**: Complete list with logos

## Implementation Strategy

### Phase 1: Foundation (Days 1-2)
1. **Project Setup**
   - Initialize Next.js project with TypeScript
   - Configure Tailwind CSS and development tools
   - Set up project structure and folder organization
   - Create base layout components

2. **Design System**
   - Define color palette and typography
   - Create reusable component library
   - Set up responsive breakpoints
   - Build common UI patterns

### Phase 2: Core Pages (Days 3-5)
1. **Homepage**
   - Hero section with stunning Central Oregon imagery
   - Mission statement and value proposition
   - Supporting organizations showcase
   - Community showcase
   - Newsletter signup

2. **About Page**
   - Mission, vision, and values
   - Community champions section
   - Impact stories

3. **Events Page**
   - Google Calendar integration setup
   - Calendar component with live event data
   - Event listings
   - Newsletter signup (no registration forms)

### Phase 3: Advanced Features (Days 6-7)
1. **Communities Page**
   - Tech startup-focused community
   - Community leader profiles
   - Join community CTAs

2. **Resources Page (Hidden from Nav)**
   - Startup toolkit
   - Mentorship programs
   - Funding opportunities

3. **Sponsors Page**
   - Sponsor showcase
   - Partnership information

### Phase 4: Polish & Optimization (Day 8)
1. **Animations & Interactions**
   - Smooth page transitions
   - Hover effects and micro-interactions
   - Loading states

2. **Performance**
   - Image optimization
   - Code splitting
   - SEO optimization

3. **Testing & Refinement**
   - Cross-browser testing
   - Mobile responsiveness
   - Performance audits

## File Structure
```
/website
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── events/
│   │   ├── communities/
│   │   ├── resources/
│   │   └── sponsors/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── forms/
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   └── icons/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## Key Features to Implement

### Interactive Elements
- **Smooth scrolling** between sections
- **Parallax effects** on hero images
- **Hover animations** on cards and buttons
- **Form validation** with real-time feedback
- **Loading states** for better UX

### Google Calendar Integration
- **Live Event Sync**: Connect to your Google Calendar to automatically display events
- **Event Details**: Pull event titles, descriptions, dates, and times
- **Real-time Updates**: Events update automatically when you add/modify them in Google Calendar
- **Calendar View**: Display events in both calendar grid and list formats
- **Event Filtering**: Filter by event type (tech talks, networking, pitch competitions)

### Content Management
- **Static content** with easy editing capabilities
- **Event data** structure for easy updates
- **Team member** profiles with photos
- **Sponsor** information and logos

### Performance Considerations
- **Image optimization** with Next.js Image component
- **Lazy loading** for below-the-fold content
- **Code splitting** for optimal bundle sizes
- **SEO optimization** with proper meta tags

## Success Metrics
- **Modern, Professional Design** that reflects Central Oregon's beauty
- **Fast Loading Times** (< 3 seconds on mobile)
- **Mobile-First Responsive** design
- **Accessible** to all users (WCAG 2.1 compliance)
- **Easy to Maintain** and update content

## Next Steps
1. Review and approve this project plan
2. Set up development environment
3. Begin Phase 1 implementation
4. Regular check-ins and feedback sessions
5. Iterative improvements based on your input

This plan ensures we build a website that truly represents the Central Oregon Innovation Network's mission while providing an exceptional user experience for tech founders and the broader community.
