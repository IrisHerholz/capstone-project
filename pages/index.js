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
      <main>
        <StyledForm onSubmit={handleSubmit}>
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
          <StyledButton1 type="submit">Submit</StyledButton1>
          <p>{output}</p>
        </StyledForm>
        <StyledNextLink href="entryform">start your journal</StyledNextLink>
      </main>
    </>
  );
}

//styled-components

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 150px;
  border: 1px solid black;
  border-radius: 1rem;
  color: black;
  gap: 1rem;
  padding: 5%;
`;

const StyledLegend = styled.legend`
  font-size: 0, 5em;
`;
const StyledLabel = styled.label`
  font-size: 1em;
`;
const StyledButton1 = styled.button`
  margin: 0px;
  padding: 0px;
  height: 30px;
  width: 100px;
`;
const StyledNextLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: 80px;
  border: 1px solid black;
  border-radius: 1rem;
  color: black;
`;
