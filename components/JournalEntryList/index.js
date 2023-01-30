import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function JournalEntryList() {
  return (
    <>
      <Heading>Your Entries</Heading>
      <EntryList>
        {titles.map((title) => (
          <ListItem key={title.id}>
            <p>Date: {title.date}</p>
            <p>Entrytitle: {title.entryTitle} </p>
            <p>Journalentry: {title.entry}</p>
          </ListItem>
        ))}
      </EntryList>
    </>
  );
}

const Heading = styled.h1`
  position: relative;
  text-align: center;
  font-size: 1, 6em;
`;
const ListItem = styled.li`
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
const EntryList = styled.ul`
  max-width: 368px;
  list-style: none;
  margin: 0 auto;
  padding: 0 0 3rem 0;
`;
