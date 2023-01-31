import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  font-family: monda;
  }
  body {
    margin: 0;
  }
  main {
    position: relative;
    top: 5rem;
    margin: 0 auto;
    max-width: 368px;
    padding: 0.5em 1em;
  }
`;
