# Frontend Boilerplate

This is a frontend boilerplate project that provides a starting point for building web applications using React, Redux, React Router, and other related technologies. It includes a folder structure and configuration to help you organize and develop your application efficiently.

## Folder Structure

The project follows the following folder structure:

- **cypress**: Contains end-to-end test files and Cypress configuration.
- **src**: Contains the main application code.
  - **components**: Reusable UI components used across the application.
  - **pages**: Top-level components for each page or view in the application.
  - **services**: Service modules responsible for interacting with external APIs or data sources.
  - **store**: Redux-related code, including actions, reducers, and slices.
  - **utils**: Utility functions and helpers.
  - **styles**: Global SCSS styles.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Install dependencies
   ```bash
   yarn install
   ```

## Available Scripts

In the project directory, you can run the following scripts:

- **dev**: Starts the development server.
  ```bash
  yarn dev
  ```
- **build**: Builds the production-ready bundle.
  ```bash
  yarn build
  ```
- **lint**: Runs the ESLint code linter.
  ```bash
  yarn lint
  ```
- **preview**: Previews the production build locally.
  ```bash
  yarn preview
  ```
- **cypress**: Opens the Cypress test runner.
  ```bash
  yarn cypress
  ```

## Dependencies

- [@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit): A package that provides utilities and abstractions for Redux.
- [@tanstack/react-query](https://github.com/tannerlinsley/react-query): A library for managing remote data fetching and caching.
- [react](https://reactjs.org): A JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): A package that serves as the entry point to the DOM and server renderers for React.
- [react-redux](https://react-redux.js.org): The official React bindings for Redux.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): A package that provides routing capabilities for React applications.
- [sass](https://sass-lang.com): A CSS extension language that enables advanced stylesheets.

## Development Tools

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint): A plugin for ESLint to support TypeScript linting.
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint): An ESLint parser for TypeScript.
- [cypress](https://www.cypress.io): A JavaScript end-to-end testing framework.
- [eslint](https://eslint.org): A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): An ESLint configuration that disables rules that conflict with Prettier.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): A set of React Hooks-specific ESLint rules.
- [eslint-plugin-react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin): A plugin for ESLint to support React Fast Refresh.
- [prettier](https://prettier.io): A code formatter that ensures consistent code style.
- [typescript](https://www.typescriptlang.org): A typed superset of JavaScript that compiles to plain JavaScript.
- [vite](https://vitejs.dev): A fast development build tool.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
