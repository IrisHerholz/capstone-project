import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function JournalEntryList() {
  return (
    <>
      <Heading>Your Entries</Heading>
      <EntryList>
        {titles.map((title) => (
          <ListItem key={title.id}>
            Date: {title.date}
            <br />
            Entrytitle: {title.entryTitle}
            <br />
            Journalentry: {title.name}
          </ListItem>
        ))}
      </EntryList>
    </>
  );
}

const Heading = styled.h1`
  position: relative;
  text-align: center;
  font-size: 20pt;
`;
const ListItem = styled.li`
  position: relative;
  font-size: 12pt;
  text-align: center;
  list-style-position: inside;
  background: lightgray;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1em;
  padding: 1.5em;
`;
const EntryList = styled.ul`
  max-width: 368px;
  list-style: none;
  margin: 0 auto;
  padding: 0 0 3rem 0;
`;
