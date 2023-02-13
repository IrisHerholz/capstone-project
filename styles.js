import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: darkblue;
  }
  body {
    font-family: 'Carme';
  }
  main {
    margin: auto;
    margin-bottom: 5rem;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
