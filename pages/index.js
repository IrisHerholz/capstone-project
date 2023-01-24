import React, { use } from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Landingpage() {
  const [entry, setEntry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(entry);
    setEntry("");
  };
  return (
    <>
      <container>
        <Title>Your Travel Journal App</Title>
        <Form
          onSubmit={handleSubmit}
          aria-labelledby="Where is yout jouney going?"
        >
          <p>Where is the journey going?</p>

          <Label htmlFor="name">City or Country?</Label>
          <input
            type="text"
            required
            id="text"
            name="entry"
            value={entry}
            placeholder="enter your destination..."
            onChange={(event) => setEntry(event.target.value)}
          />
          <Button type="submit">Submit</Button>
          <h2>{message}</h2>
        </Form>
      </container>
    </>
  );
}

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
