import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function JournalEntryList() {
  return (
    <>
      <header>
        <Heading>Your Entries</Heading>
      </header>
      <main>
        <EntryItem>
          {titles.map((title) => (
            <ListItem key={title.date}>
              Date: {title.date}
              <br />
              Entrytitle: {title.entrytitle}
              <br />
              Journalentry: {title.name}
            </ListItem>
          ))}
        </EntryItem>
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
  gap: 2em;
`;
const EntryItem = styled.ul`
  position: relative;
  top: 20px;
  font-size: 1em;
  text-align: center;
`;
