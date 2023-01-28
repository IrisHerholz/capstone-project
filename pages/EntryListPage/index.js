import JournalEntryList from "@/components/JournalEntryList";
import styled from "styled-components";
import link from "next/link";

export default function EntryListPage() {
  return (
    <>
      <StyledNextLink href="/">Back</StyledNextLink>
      <JournalEntryList />
    </>
  );
}
const StyledNextLink = styled(link)`
  position: fixed;
  text-align: center;
  font-size: 1em;
  color: red;
`;
