import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
         font-family: 'Arial';
    color: black;    
  body { 
  }
  main { 
    margin: auto;
    margin-bottom: 5rem;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 h2 {
  text-align: center;

 }
`;
