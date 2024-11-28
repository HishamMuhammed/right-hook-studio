import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #ffffff;
    --secondary-color: #1a1a1a;
    --background-dark: #000000;
    --text-color: #ffffff;
    --heading-font: 'Bodoni Moda', serif;
    --body-font: 'Inter', sans-serif;
    --alt-font: 'Press Start 2P', cursive;
    --border-radius: 4px;
    --transition-speed: 0.3s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,700&family=Inter:wght@400;500;600&display=swap');

  body {
    background-color: var(--background-dark);
    color: var(--text-color);
    font-family: var(--body-font);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  section {
    min-height: 100vh;
    padding: 4rem 1rem;
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`;
