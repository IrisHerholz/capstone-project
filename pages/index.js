import styled from "styled-components";
import { useState } from "react";

const Fieldset = styled.fieldset`
  height: 70px;
  margin: 30px;
  padding: 60px;
`;
const Label = styled.label`
  font-size: 10pt;
`;
const Button = styled.button`
  width: 100px;
  margin: 50px;
  padding: 10px;
  height: 30px;
`;
const Legend = styled.legend`
  font-size: 12pt;
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
          <Fieldset>
            <Legend>Where is your journey going?</Legend>
            <Label htmlFor="text">City or Country</Label>
            <input
              type="text"
              required
              id="text"
              name="text"
              min="1"
              max="20"
              placeholder="enter your destination..."
              pattern="[a-zA-Z]+"
            />
            <Button type="submit">Submit</Button>
            <p>{output}</p>
          </Fieldset>
        </form>
      </main>
    </>
  );
}
