# TSHOMO Studios - Portfolio Website

A modern, responsive portfolio website for TSHOMO Studios, a video game and animation production company based in Johannesburg, South Africa.

## 🎮 About TSHOMO Studios

TSHOMO Studios specializes in capturing untold cultures in interactive game and animation compositions. We tell stories of heritage and imagination with a young, eclectic, and fun team.

## 🛠 Technology Stack

- **Frontend**: React 18.3.1 with TypeScript 4.9.5
- **Styling**: CSS with custom fonts and responsive design
- **Icons & Scrolling**: react-icons, react-scroll
- **Deployment**: Docker + Nginx
- **Build Tool**: Create React App with optimized configuration

## 📋 Project Structure

```
src/
├── components/          # React components
│   ├── navbar.tsx      # Navigation bar with scroll detection
│   ├── hero.tsx        # Hero section with logo
│   ├── about.tsx       # About section with mission/vision
│   ├── services.tsx    # Services/showcase section
│   ├── contact.tsx     # Contact/reach section
│   └── footer.tsx      # Footer with newsletter & links
├── assets/             # Images and SVGs
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── App.css             # Global styles
└── index.tsx           # React entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
# Opens http://localhost:3000
```

### Building for Production

```bash
# Build the application
npm run build

# Output is in the `build/` directory
```

### Docker Deployment

```bash
# Build Docker image
docker build -t tshomo-studios .

# Run container
docker run -p 3000:80 tshomo-studios
```

The app will be available at `http://localhost:3000`

## 📱 Features

- **Responsive Design**: Mobile-first approach with desktop and mobile specific layouts
- **Smooth Scrolling**: Integrated scroll animations and navigation
- **Newsletter Subscription**: Form with email validation
- **Social Media Integration**: Links to all social platforms
- **Performance Optimized**: Custom fonts from CDN, minified builds
- **Accessibility**: Proper alt text, aria labels, and semantic HTML

## 📂 Available Scripts

### `npm start`
Runs the app in development mode with file watching (WATCHPACK_POLLING enabled for Docker).

### `npm run build`
Builds the app for production with optimized memory allocation (4GB).

### `npm test`
Launches the test runner in interactive watch mode.

## 🔧 Configuration

### TypeScript
Strict mode enabled for type safety. Configuration in `tsconfig.json`.

### Nginx
Production server configuration in `nginx.conf` for SPA routing.

### Fonts
Custom Centra font family loaded from Cloudinary CDN.

## 🎨 Styling

- **CSS**: Custom styles with CSS variables for theming
- **Colors**: Black/white theme with orange accents (#f36e4d)
- **Fonts**: Custom Centra family + Nunito Sans for fallback
- **Responsive**: Mobile-first with breakpoints for different devices

## 📞 Contact & Social

- Instagram: [@tshomostudios](https://instagram.com)
- Facebook: [TSHOMO Studios](https://facebook.com)
- YouTube: [TSHOMO Studios](https://youtube.com)
- Twitter: [@tshomostudios](https://twitter.com)
- LinkedIn: [TSHOMO Studios](https://linkedin.com)

## 📝 Recent Updates

- Converted asset imports from `require()` to ES6 imports
- Added form handling to newsletter subscription
- Fixed typos: "Statment" → "Statement"
- Improved footer links with proper routing
- Added form validation and user feedback
- Removed unused dependencies and imports
- Enhanced accessibility with proper rel attributes

## 📄 License

Private project for TSHOMO Studios.
