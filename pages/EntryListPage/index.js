import JournalEntryList from "@/components/JournalEntryList";
import Link from "next/link";
import styled from "styled-components";

export default function EntryListPage() {
  return (
    <>
      {" "}
      <Link href="/">
        <StyledLink>Back</StyledLink>
      </Link>
      <JournalEntryList />
    </>
  );
}
const StyledLink = styled.p`
  display: center;
  text-align: center;
  font-size: 1em;
  color: blue;
`;
