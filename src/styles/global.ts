import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: hsl(245, 75%, 52%);
    --light-blue: hsl(225, 100%, 94%);
    --very-light-blue: hsl(225, 100%, 98%);
    --faded-blue: hsl(224, 23%, 55%);
    --dark-blue: hsl(223, 47%, 23%);
    --white: hsl(255,100%,100%),
    --dark: hsl(30°, 1%, 11%)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    background-color: var(--light-blue);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`