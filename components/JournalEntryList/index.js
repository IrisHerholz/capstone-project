import styled from "styled-components";
import { entries } from "@/pages/_app";
import { useAtom } from "jotai";

export default function MyListComponent() {
  const [journalEntries, setJournalEntries] = useAtom(entries);

  return (
    <>
      <Heading>Your Entries</Heading>
      <EntryList>
        {journalEntries.map((entry) => (
          <Listentry key={entry.id}></Listentry>
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
const Listentry = styled.li`
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
