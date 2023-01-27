import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const Header = styled.header`
  font-family: monda;
  font-size: 2em;
  color: #e7e4d8;
  font-weight: bold;
  text-align: center;
  background-color: #78c9cc;
`;

const Form = styled.form`
  background-color: #78c9cc;
  display: grid;
  width: 70%;
  margin: 5px auto;
  padding: 10px;
background-image: linear-gradient(to top, white 0%, #D6546D 50%)
  border-radius: 5px;
  text-align: center;
`;

const Label = styled.label`
  display: center;
  padding: 20px;
  font-size: 16pt;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 3px;
  margin: 2px;
  padding: 0.5px;
  display: center;
  text-align: center;
`;

const Fieldset = styled.fieldset`
  font-weight: Light;
  display: center;
  text-align: center;
  color: #e7e4d8;
  font-family: monda;
  padding: 20%;
`;
const Legend = styled.legend`
  font-weight: Light;
  display: center;
  text-align: center;
  color: #e7e4d8;
  font-family: monda;
  font-size: 18pt;
  padding: 10%;
`;
const Input = styled.input`
  font-weight: Light;
  display: center;
  text-align: center;
  color: #e7e4d8;
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
      <Header>
        {" "}
        <h1>Mundus</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend>Where is your journey going?</Legend>
          <Label htmlFor="text">City or Country?</Label>
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
      <Link href="/EntryListPage">
        <p>Your Entries</p>
      </Link>
    </>
  );
}
