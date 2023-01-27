import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  width: 70%;
  margin: 5px auto;
  padding: 10px;
  border: 1px solid rgb(37, 38, 41);
  border-radius: 5px;
  text-align: center;
`;

const Label = styled.label`
  display: center;
  padding: 10px;
  border-radius: 4px;
  font-size: 1em;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 3px;
  margin: 2px;
  padding: 0.5px;
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
      <Container>
        <Title>Your Travel Journal</Title>
        <fieldset>
          <Form onSubmit={handleSubmit}>
            <legend>Where is your journey going?</legend>
            <label htmlFor="text">City or Country?</label>
            <input
              type="text"
              required
              id="text"
              name="text"
              placeholder="enter your destination..."
            />
            <Button type="submit">Submit</Button>
            <p>{output}</p>
          </Form>
        </fieldset>
      </Container>
      <Link href="/">
        <p>Entrylist</p>
      </Link>
    </>
  );
}
