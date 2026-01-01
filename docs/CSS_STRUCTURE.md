# CSS Organization Guide

## Current Structure
The project currently uses a monolithic `App.css` file (587 lines) containing all styles.

## Recommended Structure for Future Refactoring

### Option 1: Component-Scoped CSS (Recommended)
```
src/
├── components/
│   ├── navbar/
│   │   ├── navbar.tsx
│   │   └── navbar.css
│   ├── hero/
│   │   ├── hero.tsx
│   │   └── hero.css
│   ├── about/
│   │   ├── about.tsx
│   │   └── about.css
│   ├── services/
│   │   ├── services.tsx
│   │   └── services.css
│   ├── contact/
│   │   ├── contact.tsx
│   │   └── contact.css
│   └── footer/
│       ├── footer.tsx
│       └── footer.css
├── styles/
│   ├── variables.css    # CSS variables (colors, fonts, etc.)
│   ├── global.css       # Global resets and base styles
│   └── responsive.css   # Media queries and breakpoints
├── App.css              # App layout only
└── index.css
```

### Option 2: CSS Modules
Convert each component to use CSS Modules:
```
navbar.module.css
hero.module.css
about.module.css
services.module.css
contact.module.css
footer.module.css
```

Import in components:
```tsx
import styles from './navbar.module.css';

// Usage
<div className={styles.container}> ... </div>
```

## Current CSS Variables
Already well-defined in `App.css`:
```css
--primary-color: #000
--light-bg-color: #fff
--light-color: #242424
--dark-bg-color: #242424
--dark-color: #fff
--orange-bg-color: #f36e4d
--nav-height: 5rem
--nav-padding: 2rem
--nav-logo-size: 4rem
--hero-scroll-size: 50px
--padding-container: 0 30px
```

## Implementation Steps

1. Create `styles/variables.css` - Extract all CSS variables
2. Create `styles/global.css` - Extract global resets and base styles
3. Split component styles into individual files
4. Update imports in each component
5. Delete old `App.css` and reorganize

## Benefits of Refactoring
- ✅ Better maintainability
- ✅ Easier to locate component styles
- ✅ Reduced CSS scope pollution
- ✅ Easier to scale and add new components
- ✅ Better performance (load only needed styles)
