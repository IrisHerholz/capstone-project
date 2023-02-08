import { useState } from "react";
import styled from "styled-components";

const initialJournalEntries = [
  { id: "Jas8s", name: "Mexico", from: "01.01.2023", to: "31.01.2023", entryTitle: "First Days in Paradies",
   journalEntry: "Lorem "},
];

export default function EntryFormPage() {
  const [journalEntries, setJournalEntries] = useState(initialJournalEntries);
  return (
    <>  
        <header>
        <Heading>Add an Entry</Heading>
      </header>
    <StyledForm
    onSubmit={(event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const entryinput = Object.fromEntries(formData);

      setJournalEntries([...journalEntries, {...entryinput}]);
      event.target.reset();
    }}
    >
    <label htmlFor="destination">Your Destination:</label>
    <StyledInput
    type="text"
      name="name"
      pattern="^[^\sa0-9].*$"
      required />
<StyledDate> 
    <label htmlFor="from">from</label>
      <input
        name="from"
        type="date"
      />
      <label htmlFor="to">to</label>
      <input
        name="to"
        type="date"
      />
      </StyledDate>
      <label htmlFor="entryTitle">Entry Title:</label>
      <StyledInput
        id="entryTitle"
        name="entryTitle"
        type="text"
        maxLength="33"
       // pattern="^[^\sa0-9].*$"
        required
      />
      <label htmlFor="journalEntry">Journal Entry:</label>
      <StyledInput
      id="journalEntry"
        rows="10"
        type="text"
        name="journalEntry"
        maxLength="200"
        pattern="^[^\sa0-9].*$"
        required
      />
         <button type="submit"> Add Entry to Journal </button>
    </StyledForm>


    
    <EntryListStyle>
      {journalEntries.map((journalEntry) => {
        return (
          <ListEntry key={journalEntry.id}>
          <p> {journalEntry.name}</p> 
        <p> from {journalEntry.from} to {journalEntry.to}</p>
   <p>  Title: {journalEntry.entryTitle}</p>
           <p> Entry: {journalEntry.journalEntry}</p>
          </ListEntry>
        );
      })}
    </EntryListStyle>
    </>
  );
}

//StyledComponent
const ListEntry = styled.li`
  position: relative;
  font-size: 1em;
  text-align: center;
  list-style-position: inside;
  background: lightgray;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  padding: 3px;
`;
const EntryListStyle = styled.ul`
  max-width: 368px;
  list-style: none;
  margin: 0 auto;
  padding: 0 0 3rem 0;
`;
const StyledInput = styled.input`
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
const Heading = styled.h2`
  position: relative;
  text-align: center;
  font-size: 1em;
`;