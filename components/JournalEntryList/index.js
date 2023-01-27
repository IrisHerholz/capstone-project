import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function JournalEntryList() {
  return (
    <>
      <header>
        <H1>Your Entries</H1>
      </header>
      <main>
        <EntryItem>
          {titles.map((title) => (
            <ListItem key={title.date}>
              Date: {title.date}
              <br />
              Title: {title.entrytitle}
              <br />
              Name: {title.name}
            </ListItem>
          ))}
        </EntryItem>
      </main>
    </>
  );
}

const H1 = styled.h1`
  position: relative;
  top: 30px;
`;
const ListItem = styled.li`
  position: relative;
  top: 30px;
`;
const EntryItem = styled.ul`
  position: relative;
  top: 30px;
`;
