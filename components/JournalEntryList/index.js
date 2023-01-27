import { titles } from "/lib/data.js";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function JournalEntryList() {
  return (
    <>
      <header>
        <Heading>Your Entries</Heading>
      </header>
      <main>
        <EntryList>
          {titles.map((title) => (
            <ListItem key={uuidv4()}>
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
  font-size: 1.5em;
  text-align: center;
`;
const ListItem = styled.li`
  position: relative;
  font-size: 1em;
  text-align: center;
`;
const EntryList = styled.ul`
  position: relative;
  top: 20px;
  font-size: 1em;
  text-align: center;
`;
