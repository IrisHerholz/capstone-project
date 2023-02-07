import React from "react";
import styled from "styled-components";
import { useState } from "react";
import EntryListComponent from "../EntryList";

export default function EntryForm(dData) {
  const [entry, setEntry] = useState({
    destination: dData.destValue,
    from: "",
    to: "",
    entryTitel: "",
    journalEntry: "",
  });
  const [data, setData] = useState([]);
  const [state, setState] = useState({ data: "" })
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  function handleChange(event) {
    setEntry({
      ...entry,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setData(entry);
    setIsSubmitClicked(true);
  }
  return ( 
<>
  <StyledForm onSubmit={handleSubmit}>
    <label htmlFor="destination">Your Destination:</label>
    <textarea
      name="destination"
      value={dData.destValue}
      onChange={handleChange}
      pattern="^[^\sa0-9].*$"
      required
    />
    <StyledDate> 
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
      </StyledDate>
      <label htmlFor="entryTitle">Entry Title:</label>
      <input
        id="entryTitle"
        value={entry.entryTitel}
        name="entryTitel"
        type="text"
        maxLength="20"
        onChange={handleChange}
        pattern="^[^\sa0-9].*$"
        required
      />
      <label htmlFor="journalEntry">Journal Entry:</label>
      <textarea
        value={entry.journalEntry}
        rows="10"
        type="text"
        name="journalEntry"
        maxLength="200"
        onChange={handleChange}
        pattern="^[^\sa0-9].*$"
        required
      />
      <button type="submit"> Add Entry to Journal</button>
    </StyledForm>
    {isSubmitClicked && <EntryListComponent data={data} />}
</>
  );
}

const StyledForm = styled.form`
  display: grid;
  top: 50px;
  border: 2px solid black;
  border-radius: 2rem;
  color: drakblue;
  gap: 1rem;
  padding: 10px;
  margin: 10px;
  background-color: #white;
`;

const StyledDate = styled.ul`
display: center;
flex-direction: row;
gap: 2em;
`;
