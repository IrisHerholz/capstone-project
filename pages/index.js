import styled from "styled-components";
import { useState } from "react";

const StyledFieldset = styled.fieldset`
  height: 70px;
  margin: 30px;
  padding: 60px;
`;
const StyledLabel = styled.label`
  font-size: 1em;
`;
const StyledButton = styled.button`
  width: 100px;
  margin: 50px;
  padding: 10px;
  height: 30px;
`;
const StyledLegend = styled.legend`
  font-size: 1em;
  padding: 20px;
`;

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
              maxLength="15"
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
