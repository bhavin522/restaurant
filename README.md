# Shiv Aurica Restaurant Homepage

A modern, responsive restaurant homepage built with React and Vite.

## Features

- Elegant, clean UI inspired by restaurant landing page designs
- Navigation bar with smooth scrolling
- Hero section with background image and headline
- Welcome section
- Featured dishes with images
- Book a Table call-to-action
- Embedded Google Map for location
- Fully responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/bhavin522/restaurant.git
   cd restaurant/client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Build for Production

```sh
npm run build
```

The production-ready files will be in the `dist` folder.

## Deploy to GitHub Pages

1. Install the gh-pages package:
   ```sh
   npm install --save-dev gh-pages
   ```
2. Add the following to your `package.json`:
   - At the top level:
     ```json
     "homepage": "https://bhavin522.github.io/restaurant"
     ```
   - In the scripts section:
     ```json
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
     ```
3. Deploy:
   ```sh
   npm run deploy
   ```
4. In your GitHub repo, go to **Settings > Pages** and set the source to the `gh-pages` branch.

Your site will be live at: https://bhavin522.github.io/restaurant

---

## License

This project is open source and available under the [MIT License](../LICENSE).
