import styled from "styled-components";
import { useAtom } from "react";
import { entries } from "/pages/_app.js";

export default function Form() {
  const [journalEntries, setJournalEntries] = useAtom(entries);
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }
  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit} value={journalEntries}>
        <label htmlFor="destination">Your Destination:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="Enter your destination"
          maxLength="20"
          onChange={(event) => setJournalEntries(event.target.value)}
          required
        />

        <StyledDate>
          <label htmlFor="dateStart">Start Date:</label>
          <input
            id="dateStart"
            name="dateStart"
            type="date"
            required
            onChange={(event) => setJournalEntries(event.target.value)}
          />
          <label htmlFor="dateEnd">End Date:</label>
          <input
            id="dateEnd"
            name="dateEnd"
            type="date"
            required
            onChange={(event) => setJournalEntries(event.target.value)}
          />
        </StyledDate>

        <label htmlFor="entryTitle">Entry Title:</label>
        <input
          id="entryTitle"
          name="entryTitle"
          type="text"
          placeholder="Give your entry a title"
          maxLength="20"
          required
          onChange={(event) => setJournalEntries(event.target.value)}
        />
        <label htmlFor="journal">Journal Entry:</label>
        <input
          type="text"
          id="journal"
          name="journal"
          placeholder="You have 200 words for your entry"
          maxLength="200"
          required
          onChange={(event) => setJournalEntries(event.target.value)}
        />
        <button type="submit">Save It</button>
      </StyledForm>
    </StyledSection>
  );
}

//styled-component
const StyledDate = styled.section`
  display: flex;
  flex-direction: row;
`;
const StyledSection = styled.section`
  position: center;
  padding: 30px;
  margin: 5px;
  bottom: 30px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 150px;
  border: 1px solid black;
  border-radius: 1rem;
  color: black;
  gap: 1rem;
  padding: 5%;
`;
