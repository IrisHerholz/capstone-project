import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

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
      <form onSubmit={handleSubmit}>
        <StyledSection>
          <StyledLegend>Where is your journey going?</StyledLegend>
          <label htmlFor="text">City or Country?</label>
          <input
            type="text"
            required
            id="text"
            name="text"
            pattern="^[^\sa0-9].*$"
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
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;
  gap: 1rem;
`;
const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 1rem;
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
  font-size: 1.5em;
  font-weight: bold;
  border: lightblue dotted;
`;
