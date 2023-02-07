import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function EntryListComponent() {
  return (
    <>
      <header>
        <Heading>Your Entries</Heading>
      </header>
      <EntryList>
        {titles.map((title) => (
          <ListEntry key={title.id}>
            <p> Date: {title.date}</p>
            <p> Title: {title.entryTitle}</p>
            <p> Name: {title.entry}</p>
          </ListEntry>
        ))}
      </EntryList>
    </>
  );
}

const Heading = styled.h2`
  position: relative;
  text-align: center;
  font-size: 1, 2em;
`;
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
const EntryList = styled.ul`
  max-width: 368px;
  list-style: none;
  margin: 0 auto;
  padding: 0 0 3rem 0;
`;
