# Webpack Project README

This project demonstrates setting up a basic Webpack configuration to bundle JavaScript files, including jQuery, into a single output file.

## Project Structure

```
task_0/
├── dist/                   # Output directory for bundled files
│   ├── index.html          # HTML file importing bundled JavaScript
│   └── main.js             # Bundled JavaScript file
├── src/                    # Source directory
│   └── index.js            # Main JavaScript file
├── node_modules/           # Node.js modules (created after npm install)
├── package.json            # Project configuration file
└── package-lock.json       # Auto-generated file by npm for package dependencies
```

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd task_0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

### Development Build

To build the project for development (generates `main.js`):

```bash
npm run build
```

### Running the Application

Open `dist/index.html` in a web browser to view the application.

## Project Details

### Dependencies

- **Webpack** and **Webpack CLI** are used for module bundling.
- **jQuery** is included as a dependency for DOM manipulation.

### Files

- **`src/index.js`**: Entry point JavaScript file that imports jQuery and appends paragraphs to the HTML body.
- **`dist/index.html`**: HTML file that imports the bundled JavaScript (`main.js`).

## Additional Notes

- This project does not use a custom webpack configuration file (`webpack.config.js`). Instead, it relies on default configurations and npm scripts defined in `package.json`.
- Make sure Node.js and npm are installed on your machine before proceeding with installation.
