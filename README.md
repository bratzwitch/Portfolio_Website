# Portfolio Website

A modern portfolio website showcasing projects and skills, built with Vite for fast development and optimized builds.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

3. **Build for production:**
   ```bash
   npm run build
   ```

## Features

- ⚡ Fast development with Vite
- 🎨 Modern CSS with animations and effects
- 📱 Responsive design for all devices
- 🚀 Optimized production builds
- 🔥 Hot module replacement (HMR)
- 🎯 Interactive project showcase
- 💼 Professional portfolio layout

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser
- **VS Code** (recommended for best development experience)

### Installation

1. **Clone or download the project:**
   ```bash
   git clone <repository-url>
   cd portfolio_web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install Vite and other development dependencies.

### Development

**Option 1: Command Line**
```bash
npm run dev
```

**Option 2: VS Code (Recommended)**
1. Open the project in VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Tasks: Run Task"
4. Select "Start Development Server"

Both methods will:
- Start a local development server at `http://localhost:3000`
- Enable hot reload (changes reflect instantly)
- Show any compilation errors in the console

### Building for Production

**Option 1: Command Line**
```bash
npm run build
```

**Option 2: VS Code**
1. Press `Ctrl+Shift+P`
2. Type "Tasks: Run Build Task"
3. Select "Build for Production"

This creates an optimized build in the `dist/` directory with:
- Minified JavaScript and CSS
- Optimized assets
- Cache-friendly file names
- Source maps for debugging

### Preview Production Build

Test your production build locally:
```bash
npm run preview
```
This serves the built files at `http://localhost:4173`

## Project Structure

```
portfolio_web/
├── src/
│   ├── main.js       # Entry point
│   ├── script.js     # JavaScript functionality
│   └── style.css     # Styles
├── public/           # Static assets
├── dist/             # Production build (generated)
├── index.html        # Main HTML file
├── vite.config.js    # Vite configuration
└── package.json      # Dependencies and scripts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production version |
| `npm run preview` | Preview production build locally |

## VS Code Integration

This project includes VS Code configuration for enhanced development:

### Tasks Available
- **Start Development Server** - Launches dev server in background
- **Build for Production** - Creates optimized build
- **Preview Production Build** - Tests production build locally

### Recommended Extensions
The project includes extension recommendations that will be suggested when you open it in VS Code:
- CSS IntelliSense
- HTML/CSS support
- Live Server
- Path IntelliSense
- Auto Rename Tag

### Debugging
Use F5 or the Debug panel to launch Chrome with the development server for debugging.

## Technologies Used

- Vite - Build tool and development server
- Vanilla JavaScript - Core functionality
- CSS3 - Styling and animations
- HTML5 - Structure


## Troubleshooting

**Node modules issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
# Check Node.js version (should be 16+)
node --version

# Update dependencies
npm update
```

## Author

Viacheslav Moroz - 42 Student
