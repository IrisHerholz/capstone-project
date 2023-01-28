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
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top: 5rem;
    margin: 0 auto;
    max-width: 368px;
    padding: 0.5em 1em;
    text-align: center;
    color: black;
  }
`;
