import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
     box-sizing: border-box;
    font-style: ;
font-family: 'Arial';  
color: #008080;      
  background-color: #f0fff0;
  body {
 color: #008080;          
  }
  main {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
