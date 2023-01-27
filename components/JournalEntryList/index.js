import { titles } from "/lib/data.js";
import styled from "styled-components";

export default function JournalEntryList() {
  return (
    <>
      <header>
        <H1>Your Entries</H1>
      </header>
      <main>
        <Ul>
          {titles.map((title) => (
            <Li key={title.date}>
              Date: {title.date}
              <br />
              Title: {title.entrytitle}
              <br />
              Name: {title.name}
            </Li>
          ))}
        </Ul>
      </main>
    </>
  );
}

const H1 = styled.h1`
  position: relative;
  top: 30px;
`;
const Li = styled.li`
  position: relative;
  top: 30px;
`;
const Ul = styled.ul`
  position: relative;
  top: 30px;
`;
