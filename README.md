# Ukiah United Methodist Church - Interactive Bulletin System

## 📖 Project Overview

A modern, interactive, mobile-first church bulletin application built with Next.js 14, TypeScript, and Tailwind CSS. Features a persistent HUD navigation system that helps congregation members follow along during live worship services.

## 🏗️ Architecture & Tech Stack

### **Core Technologies**
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with automatic dark mode
- **React Hooks** for state management
- **Intersection Observer API** for scroll-spy functionality

### **Key Features**
- 📱 **Mobile-First Design**: Optimized for elderly users on mobile devices
- 🎯 **Interactive Navigation**: Persistent HUD footer with scroll-spy
- ♿ **Full Accessibility**: ARIA compliant with keyboard navigation
- 🌙 **Automatic Dark Mode**: System preference detection
- 🖨️ **Print Optimization**: Professional print stylesheet
- 📋 **Dynamic Content**: JSON-driven bulletin structure

## 📁 Project Structure

```
src/
├── app/
│   ├── [date]/                    # Dynamic bulletin routes
│   │   ├── page.tsx              # Main route handler
│   │   ├── BulletinContent.tsx   # Interactive bulletin component
│   │   └── PlaceholderBulletin.tsx # Future bulletin placeholder
│   ├── archive/
│   │   └── page.tsx              # Bulletin archive listing
│   ├── bulletins/
│   │   └── 2025-07-13-data.ts    # Structured bulletin data
│   ├── layout.tsx                # Root layout with print CSS
│   └── page.tsx                  # Redirects to latest bulletin
├── components/
│   ├── HudFooter.tsx             # Persistent bottom navigation
│   ├── TableOfContents.tsx       # Slide-out hamburger menu
│   └── bulletin/                 # 15 specialized bulletin components
├── hooks/
│   └── useScrollSpy.ts           # Intersection Observer hook
└── styles/
    └── print.css                 # Print-specific styles
```

## 🎛️ Core Components

### **HudFooter.tsx** - Persistent Bottom Navigation
- **Location**: Fixed bottom bar (h-16)
- **Features**: Menu toggle, current section display, next/top navigation
- **Logic**: Smart button that changes to "Scroll to Top ↑" at last section
- **Accessibility**: Full ARIA labels and keyboard support

### **TableOfContents.tsx** - Slide-out Navigation Menu  
- **Behavior**: Slides in from left when menu button pressed
- **Features**: Full service order listing, smooth scroll navigation, archive link
- **Accessibility**: Modal dialog with Escape key support, focus management

### **useScrollSpy.ts** - Scroll Detection Hook
- **Technology**: Intersection Observer API
- **Configuration**: `rootMargin: '0px 0px -50% 0px'` for stable detection
- **Purpose**: Tracks which bulletin section is currently visible

### **BulletinContent.tsx** - Main Interactive Component
- **Architecture**: Maps JSON data to specialized components
- **Integration**: Connects scroll-spy, navigation, and menu systems
- **Styling**: Black-and-white design with dual-font system

## 📋 Bulletin Data Structure

### **Data Location**: `src/app/bulletins/[date]-data.ts`

```typescript
interface BulletinSection {
  id: string      // URL-safe identifier (e.g., "prelude", "call-to-worship")
  type: string    // Component type (e.g., "hymn", "responsiveReading")
  title: string   // Human-readable title
  // Additional properties based on component type
}

export const bulletinData = {
  churchName: string
  motto: string
  date: string
  theme: string
  serviceOrder: BulletinSection[] // Array of service elements with unique IDs
}
```

### **Component Mapping**
Each `type` in serviceOrder maps to a specialized component:
- `sectionTitle` → SectionTitle.tsx
- `hymn` → HymnDisplay.tsx  
- `responsiveReading` → ResponsiveReading.tsx
- `scriptureReading` → ScriptureReading.tsx
- `message` → Message.tsx
- `announcements` → Announcements.tsx
- And 9 other specialized components...

## 🎨 Design System

### **Typography**
- **Headings**: `font-sans` (sans-serif) for section titles and navigation
- **Body Text**: `font-serif` (serif) for bulletin content and readings
- **Colors**: Pure black (#000000) on white (#FFFFFF) background

### **Dark Mode**
- **Strategy**: Tailwind `darkMode: 'media'` (system preference)
- **Colors**: `dark:bg-black dark:text-white dark:border-white`
- **Consistency**: Applied across all components and interactive elements

### **Print Styles**
- **File**: `src/styles/print.css`
- **Behavior**: Hides interactive elements, optimizes typography
- **Configuration**: 12pt font, proper line height, page break control

## 🚀 Development Workflow

### **Getting Started**
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Production build
npm run start       # Production server
```

### **Adding New Bulletins**
1. Create new data file: `src/app/bulletins/YYYY-MM-DD-data.ts`
2. Follow existing JSON structure with unique `id` for each section
3. Add date to `generateStaticParams()` in `src/app/[date]/page.tsx`
4. Update archive links in `src/app/archive/page.tsx`

### **Bundle Analysis**
- **First Load JS**: ~87-90kB (optimized)
- **Static Generation**: Pre-renders all bulletin routes
- **Performance**: Mobile-optimized with efficient chunk splitting

## 🔧 Interactive Features

### **Scroll-Spy Navigation**
- **Detection**: Intersection Observer with 50% rootMargin
- **Update**: Real-time "Now: [Section]" display in HUD footer
- **Stability**: Prevents flickering with optimized observer settings

### **Smart Navigation Buttons**
- **Next Section**: Scrolls to next bulletin element
- **Scroll to Top**: Appears when at last section (smart button)
- **Menu Toggle**: Opens/closes slide-out table of contents

### **Accessibility Features**
- **ARIA Labels**: All interactive elements properly labeled
- **Keyboard Navigation**: Full keyboard operation capability
- **Screen Readers**: Semantic HTML with proper heading hierarchy
- **Focus Management**: Proper focus handling in modal dialogs

## 🖨️ Print Functionality

### **Print CSS Rules**
```css
@media print {
  .hud-footer, [data-print-hidden] { display: none !important; }
  body { font-size: 12pt !important; color: black !important; }
}
```

### **Print Optimization**
- Hides all interactive navigation elements
- Optimizes text size and spacing for paper
- Ensures proper page breaks between sections
- Maintains black-and-white design integrity

## 📱 Mobile-First Design Principles

### **Target Audience**: Elderly congregation members on mobile devices
### **Design Priorities**:
1. **High Contrast**: Pure black text on white background
2. **Large Touch Targets**: Minimum 44px for buttons
3. **Clear Typography**: Dual-font system for readability
4. **Simple Navigation**: Persistent HUD with minimal cognitive load
5. **Smooth Scrolling**: Gentle animations for section transitions

## 🎯 Usage During Live Services

### **Congregation Workflow**:
1. **Open Bulletin**: Navigate to current Sunday's bulletin URL
2. **Follow Along**: HUD footer shows current section automatically
3. **Quick Navigation**: Tap menu for instant section jumping
4. **End of Service**: "Scroll to Top" button appears at final section
5. **Archive Access**: Historical bulletins available via slide-out menu

### **Pastor/Staff Workflow**:
1. **Content Creation**: Update JSON data file with service order
2. **Preview**: Test navigation and scroll-spy functionality
3. **Print Backup**: Professional print version automatically optimized
4. **Live Deployment**: Static generation ensures fast loading

## 🔄 Recent Enhancements (CTO Orders Implemented)

### **Robustness Improvements**:
- ✅ Smart HUD footer with "Scroll to Top" at end
- ✅ Enhanced scroll-spy stability (50% rootMargin)
- ✅ Full ARIA accessibility compliance
- ✅ Print stylesheet with element hiding
- ✅ Automatic dark mode system integration

### **Performance Optimizations**:
- Bundle size maintained under 90kB
- Static site generation for all routes
- Efficient code splitting and lazy loading
- Optimized Intersection Observer usage

## 🚨 Known Issues & Limitations

### **Current Limitations**:
- Desktop hamburger menu scrolling needs improvement
- No offline/PWA functionality (estimated 2.5hr implementation)

### **Browser Support**:
- Modern browsers with Intersection Observer support
- Automatic fallbacks for legacy browser compatibility
- Print functionality requires modern print CSS support

## 🔮 Future Enhancement Opportunities

### **PWA Conversion** (2.5 hour estimate):
- Offline bulletin access
- Home screen installation
- Push notifications for new bulletins
- Service worker caching strategies

### **Content Management**:
- Admin interface for bulletin creation
- Multi-language support
- Recurring service templates
- Image/media integration

### **Advanced Features**:
- Live service streaming integration
- Real-time announcements
- Social sharing capabilities
- Analytics and usage tracking

## 💡 Development Tips for Future Copilot Agents

### **Key Files to Understand**:
1. **`useScrollSpy.ts`** - Core navigation logic
2. **`BulletinContent.tsx`** - Main component integration
3. **`HudFooter.tsx`** - Persistent navigation bar
4. **Bulletin data files** - JSON structure and component mapping

### **Common Tasks**:
- **Adding Components**: Create in `/bulletin/` folder, add to BulletinContent mapping
- **Styling Changes**: Use Tailwind classes, maintain black/white + dark mode
- **Navigation Issues**: Check scroll-spy observer settings and section IDs
- **Print Problems**: Update `print.css` and data-print-hidden attributes

### **Testing Checklist**:
- [ ] Mobile responsiveness (primary priority)
- [ ] Scroll-spy accuracy during navigation
- [ ] Dark mode consistency across components
- [ ] Print stylesheet hiding interactive elements
- [ ] Keyboard accessibility for all interactive features
- [ ] Build success with optimized bundle size

---

**Repository Status**: Production-ready interactive church bulletin system with comprehensive accessibility, mobile optimization, and print functionality. 🙏