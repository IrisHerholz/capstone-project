import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function Landingpage() {
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const entry = event.target.elements.text.value;
    setOutput(entry);
    event.target.reset();
  };
  return (
    <>
   <Header />
      <form onSubmit={handleSubmit}>
        <StyledSection>
          <StyledLegend>Where is your journey going?</StyledLegend>
          <label htmlFor="text">City or Country?</label>
          <input
            type="text"
            required
            id="text"
            name="text"
           // pattern="^[^\sa0-9].*$"
            maxLength="33"
            placeholder="enter your destination..."
            inputColor="rebeccapurple"
          />
          <StyledButton type="submit">submit</StyledButton>
          <StyledLink
            href={{ pathname: "./addNewEntryPage", query: { output } }}
          >
            {output}
          </StyledLink>
        </StyledSection>
      </form>
</>
  );
}
//styled-component
const StyledLegend = styled.legend`
  font-weight: bold;
`;
const StyledSection = styled.section`
margin-top: 10%;
margin-left: 5%;
margin-right: 5%;
display: flex;
flex-direction: column;
padding: 20px;
border-radius: 30px;
  text-align: center;
  box-shadow: 10px 10px 15px silver;
  font-size: 1em;
  gap: 0.9em;
  background-color: #fffaf0;
`;
const StyledButton = styled.button`
padding: 5px;
font-size: 1em;
border-radius: 0.7rem;
background-color: white;
color: #008080;
border: 2px solid #008080;
&:hover {
  background-color: #008080;
  color: white;
  cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  padding: 1em;
  margin: 1em;
  font-size: 1.7em;
  color: hotpink;
  border-radius: 4px;
  font-weight: bold;
  border: lightblue dotted;

`;
