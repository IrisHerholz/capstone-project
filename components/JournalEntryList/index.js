import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function JournalEntryList() {
  return (
    <>
      <header>
        <Heading>Your Entries</Heading>
      </header>
      <main>
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
      </main>
    </>
  );
}

const Heading = styled.h1`
  position: relative;
  top: 20px;
  font-size: 2em;
  text-align: center;
`;
const ListItem = styled.li`
  display: grid;
  position: relative;
  font-size: 1em;
  text-align: center;
  list-style-position: inside;
  background: lightgray;
  margin: 4px;
`;
const EntryList = styled.ul`
  position: relative;
  font-size: 1em;
  text-align: center;
  list-style-type: circle;
`;
