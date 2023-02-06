import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function Form() {
  const [entry, setEntry] = useState({
    destination: "",
    from: "",
    to: "",
    journaltitel: "",
    journalentry: "",
  });
  function handleChange(event) {
    setEntry({
      ...entry,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="destination">Your Destination:</label>
      <textarea
        name="destination"
        value={entry.destination}
        onChange={handleChange}
        pattern="[A-Z0-9]+"
        required
      />

      <label htmlFor="from">START</label>
      <input
        id="from"
        value={entry.from}
        name="from"
        type="date"
        onChange={handleChange}
      />
      <label htmlFor="to">END</label>
      <input
        id="to"
        value={entry.to}
        name="to"
        type="date"
        onChange={handleChange}
      />

      <label htmlFor="entryTitle">Entry Title:</label>
      <input
        id="journaltitel"
        value={entry.journaltitel}
        name="journaltitel"
        type="text"
        maxLength="20"
        onChange={handleChange}
        pattern="[A-Z0-9]+"
        required
      />
      <label htmlFor="journalentry">Journal Entry:</label>
      <textarea
        value={entry.journalentry}
        rows="10"
        type="text"
        name="journalentry"
        maxLength="200"
        onChange={handleChange}
        pattern="[A-Z0-9]+"
        required
      />
      <button type="submit"> Add Entry to Journal</button>
      <StyledSection>
        <h2>DESTINATION : {entry.destination} </h2>
        <p> START {entry.from}</p>
        <p>END{entry.to}</p>
        <p>TITLE :{entry.journaltitel}</p>
        <p>ENTRTY :{entry.journalentry}</p>
      </StyledSection>
    </StyledForm>
  );
}

const StyledSection = styled.section`
  display: grid;
  flex-direction: row;
  top: 100px;
  border: 2px solid black;
  border-radius: 1rem;
  color: black;
  gap: 1rem;
  margin: 0%;
  padding: 20%;
`;

const StyledForm = styled.form`
  display: grid;
  flex-direction: row;
  top: 50px;
  border: 2px solid black;
  border-radius: 2rem;
  color: black;
  gap: 1rem;
  margin: 0%;
  padding: 10%;
  background-color: #white;
`;
