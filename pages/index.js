import styled from "styled-components";
import { useState } from "react";

export default function Landingpage() {
  const [output, setOutput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = event.target.elements.text.value;
    setOutput(entry);
  };
  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <StyledFieldset>
            <StyledLegend>Where is your journey going?</StyledLegend>
            <StyledLabel htmlFor="text">City or Country</StyledLabel>
            <input
              type="text"
              required
              id="text"
              name="text"
              pattern="^[^\sa0-9].*$"
              maxLength="20"
              placeholder="enter your destination..."
            />
            <StyledButton type="submit">Submit</StyledButton>
            <p>{output}</p>
          </StyledFieldset>
        </form>
      </main>
    </>
  );
}

//styled-components

const StyledFieldset = styled.fieldset`
  margin: px;
  width: 50%;
  height: 100%;
`;
const StyledLegend = styled.legend`
  font-size: 0, 5em;
`;
const StyledLabel = styled.label`
  font-size: 1em;
`;
const StyledButton = styled.button`
  margin: 0px;
  padding: 0px;
  height: 30px;
  width: 100px;
`;
