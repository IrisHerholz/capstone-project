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
      <body>
        <form onSubmit={handleSubmit}>
          <StyledFieldset>
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
          </StyledFieldset>
        </form>
      </body>
    </>
  );
}
//styled-component
const StyledLegend = styled.legend`
  font-weight: bold;
`;
const StyledFieldset = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;
  gap: 1rem;
`;

const StyledButton = styled.button`
  font-size: 1.1em;
`;
const StyledLink = styled(Link)`
  padding: 1em;
  margin: 1em;
  font-size: 1.5em;
  font-weight: bold;
  border: lightblue dotted;
`;
