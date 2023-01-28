import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function JournalEntryList() {
  return (
    <>
      <StyledMain>
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
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  font-size: 18pt;
  text-align: center;
  margin: 10%;
  bottom: 350%;
`;

const Heading = styled.h1`
  font-size: 20pt;
`;
const ListItem = styled.li`
  position: relative;
  font-size: 12pt;
  text-align: center;
  list-style-position: inside;
  background: lightgray;
  margin: 4px;
`;
const EntryList = styled.ul`
  display: center;
  font-size: 1em;
  text-align: center;
  list-style-type: circle;
  margin: 5%;
`;
