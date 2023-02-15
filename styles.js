import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
     box-sizing: border-box;
    font-style: ;
font-family: 'Arial';  
  body { 
    color: #008080;       
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
