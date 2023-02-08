import React from "react";
import styled from "styled-components";
import { useState } from "react";
import EntryListComponent from "@/pages/entrylist";

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
  <StyledForm   onSubmit={(event) => handleSubmit(event)}>
    <label htmlFor="destination">Your Destination:</label>
    <Textarea1
      name="destination"
      value={dData.destValue}
      onChange={handleChange}
      pattern="^[^\sa0-9].*$"
      required
      id="1"
    />
    <StyledDate> 
    <label htmlFor="from">START</label>
      <input
        id="2"
        value={entry.from}
        name="from"
        type="date"
        onChange={handleChange}
      />
      <label htmlFor="to">END</label>
      <input
        id="3"
        value={entry.to}
        name="to"
        type="date"
        onChange={handleChange}
      />
      </StyledDate>
      <label htmlFor="entryTitle">Entry Title:</label>
      <input
        id="4"
        value={entry.entryTitel}
        name="entryTitel"
        type="text"
        maxLength="33"
        onChange={handleChange}
        pattern="^[^\sa0-9].*$"
        required
      />
      <label htmlFor="journalEntry">Journal Entry:</label>
      <textarea
        value={entry.journalEntry}
        rows="5"
        type="text"
        name="journalEntry"
        maxLength="200"
        onChange={handleChange}
        pattern="^[^\sa0-9].*$"
        required
      />
      <button type="submit"> Add Entry to Journal </button>
    </StyledForm>
    {isSubmitClicked && <EntryListComponent data={data} />}
</>
  );
}
const Textarea1 = styled.textarea`
padding: 1px;
margin: 1px;
font-size: 1em;
font-weight: bold;
text-decoration: none;
background-color: lightblue;
display: center;
`;

const StyledForm = styled.form`
  display: grid;
  top: 50px;
  border: 2px solid black;
  border-radius: 2rem;
  color: drakblue;
  gap: 0,5rem;
  padding: 10px;
  margin: 10px;
  background-color: #white;
`;

const StyledDate = styled.p`
display: center;
flex-direction: row;
gap: 3em;
`;
