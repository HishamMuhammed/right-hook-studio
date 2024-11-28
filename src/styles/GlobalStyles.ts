import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #ff3e3e;
    --primary-light: #ff6b6b;
    --secondary-color: #2b0000;
    --accent-color: #ff9d00;
    --background-dark: #1a0000;
    --text-color: #ffffff;
    --border-radius: 12px;
    --transition-speed: 0.3s;
    --heading-font: 'Press Start 2P', cursive;
    --body-font: 'VT323', monospace;
    --alt-font: 'Silkscreen', cursive;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--secondary-color);
    color: var(--text-color);
    font-family: var(--body-font);
    font-size: 18px;
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: all var(--transition-speed) ease;
  }

  button {
    font-family: var(--alt-font);
    cursor: pointer;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: var(--border-radius);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-light);
  }

  /* Selection */
  ::selection {
    background: var(--primary-color);
    color: var(--secondary-color);
  }

  /* Page Transitions */
  .page-transition-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }

  .page-transition-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .page-transition-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms, transform 300ms;
  }
`;
