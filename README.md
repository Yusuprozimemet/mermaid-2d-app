# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:
# Mermaid 2D App

An interactive web application for editing and rendering Mermaid diagrams in 2D, built with a modern React/TypeScript stack.

## Features
- **Live Mermaid Editor**: Real-time editing and preview of diagrams
- **2D Diagram Rendering**: Responsive, high-quality visualization
- **Component-Based Architecture**: Modular, maintainable React components
- **Modern Tooling**: Vite for fast builds, Tailwind CSS for utility-first styling

## Project Structure
```
├── public/                # Static assets
├── src/
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── App.css, index.css # Global styles
│   ├── components/
│   │   ├── Editor.tsx     # Mermaid code editor
│   │   └── Preview2D.tsx  # 2D diagram preview
│   └── utils/
│       └── mermaidParser.ts # Mermaid parsing utilities
├── index.html             # HTML template
├── package.json           # Project metadata & scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.cjs    # Tailwind CSS config
├── tsconfig*.json         # TypeScript configs
```

## Tech Stack
- **React** (functional components)
- **TypeScript** (type safety)
- **Vite** (fast dev/build)
- **Tailwind CSS** (utility-first CSS)
- **Mermaid.js** (diagram rendering)

## Architecture & Techniques
- **Separation of Concerns**: UI, logic, and utilities are organized for clarity
- **Reusable Components**: Editor and Preview2D are decoupled for flexibility
- **Performance**: Vite enables fast HMR; Tailwind keeps CSS minimal
- **Extensibility**: Modular design for easy feature addition

## Getting Started
1. **Install dependencies**
  ```sh
  npm install
  ```
2. **Run the app**
  ```sh
  npm run dev
  ```
3. **Build for production**
  ```sh
  npm run build
  ```

## Why This Project?
- Clean, maintainable, and scalable codebase
- Demonstrates modern React/TypeScript best practices
- Focus on developer experience and UI/UX

---
**Contact:** [Your Name] · [Your Email] · [LinkedIn/GitHub]
