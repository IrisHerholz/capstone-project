import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Landingpage() {
  const [output, setOutput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const entry = event.target.elements.text.value;
    setOutput(entry);
    event.target.reset();
  };

  const onLinkClick = (event) => {
    event.preventDefault();
    setIsClicked(true);
  };

  return (
    <>
      <main>
        <StyledForm onSubmit={handleSubmit}>
          <legend>Where is your journey going?</legend>
          <label htmlFor="text">City or Country?</label>
          <StyledInput
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
        > {output}
        </StyledLink>  
        </StyledForm>
      </main>
    </>
  );
}
//styled-component
const StyledInput = styled.input`
display: flex;
  justify-content: center;
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 2px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1%;
margin: 1%;
  font-size: 1em;
  width: 100%;

`;
const StyledButton = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 1px solid blue;
border-radius: 1px;
`;
const StyledLink= styled(Link)`
  padding: 1px;
  margin: 1px;
  font-size: 1em;
font-weight: bold;
text-decoration: none;
background-color: lightblue;
`;
