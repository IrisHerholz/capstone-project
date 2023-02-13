import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: black;
  body {  
     font-family: 'Arial';
    font-weight: bold;
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
