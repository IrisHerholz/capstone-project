import JournalEntryList from "@/components/JournalEntryList";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <header>
        <H1>Your Travel Journal</H1>
      </header>
      <JournalEntryList />
    </>
  );
}
const H1 = styled.h1`
  position: relative;
  top: 0;
  margin: 10px;
`;
