import styled from "styled-components";
import { useState } from "react";
import link from "next/link";

const StyledNextLink = styled(link)`
  text-align: center;
  font-size: 1em;
  color: blue;
`;

const Form = styled.form`
  color: black;
  display: grid;
  width: 100%;
  margin: 5px auto;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const Label = styled.label`
  display: center;
  padding: 20px;
  font-size: 10pt;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 5px;
  width: 100px;
  margin: 20px;
  padding: 0.5px;
  display: center;
  text-align: center;
`;

const Fieldset = styled.fieldset`
  display: center;
  text-align: center;
  color: #black;
  font-family: monda;
  padding: 10%;
`;
const Legend = styled.legend`
  font-weight: Light;
  display: center;
  text-align: center;
  color: black;
  font-family: monda;
  font-size: 12pt;
  padding: 30px;
`;
const Input = styled.input`
  font-weight: Light;
  color: black;
  font-family: monda;
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
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <Legend>Where is your journey going?</Legend>
            <Label htmlFor="text">City or Country</Label>
            <Input
              type="text"
              required
              id="text"
              name="text"
              placeholder="enter your destination..."
            />
            <Button type="submit">Submit</Button>
            <p>{output}</p>
          </Fieldset>
        </Form>
        <StyledNextLink href="/EntryListPage">Your Entries</StyledNextLink>
      </main>
    </>
  );
}
