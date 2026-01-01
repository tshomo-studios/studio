# Project Overview

This is a single-page React application that serves as a landing page for Tshomo Studios, a video game and animation production company. The application is built with TypeScript and uses the Create React App toolchain.

The main technologies used are:

*   **React:** For building the user interface.
*   **TypeScript:** For static typing and improved code quality.
*   **react-scroll:** For smooth scrolling navigation between sections of the single-page application.
*   **react-icons:** For including icons in the UI.

The application is structured into several components, each representing a section of the landing page: `Hero`, `About`, `Testimonial`, `Reach`, and `Footer`.

## Building and Running

The following commands are available for building, running, and testing the project:

*   **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
*   **`npm run build`**: Builds the app for production to the `build` folder.
*   **`npm test`**: Launches the test runner in interactive watch mode.

## Development Conventions

*   **Component Structure:** Components are located in the `src/components` directory. Each component is a functional component written in TypeScript (`.tsx`).
*   **Styling:** All styles are in a single CSS file located at `src/App.css`. The project does not use CSS modules or a CSS-in-JS library.
*   **State Management:** The application uses local component state managed with the `useState` hook.
*   **Navigation:** Navigation is handled by the `react-scroll` library, which provides smooth scrolling to different sections of the page.
*   **Assets:** Images and SVGs are stored in the `src/assets` directory.
