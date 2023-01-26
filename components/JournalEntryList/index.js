import { titles } from "/lib/data.js";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function JournalEntryList() {
  return (
    <artcle>
      <header>
        <H1>Your Entries</H1>
      </header>
      <section>
        {titles.map((title) => {
          return;
          <li key={uuidv4()}>{title.date}</li>;
        })}
      </section>
    </artcle>
  );
}

const H1 = styled.h1`
  position: relative;
  top: 0;
`;
