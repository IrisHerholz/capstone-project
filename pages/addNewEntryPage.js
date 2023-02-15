import useLocalStorageState from "use-local-storage-state";
import FormComponent from "@/components/Form";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function EntryFormPage() {
  const router = useRouter();
  const [journalEntries, setJournalEntries] =
    useLocalStorageState("newJournalEntry");

  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
  };
  return (
    <>
      <StyledHeader>Add an Entry</StyledHeader>
      <FormComponent onSubmitEvent={addJournalEntry} cityname={router.query} />
    </>
  );
}
const StyledHeader = styled.h2`
font-size: 2em;
height: 20%;
  left: 0;
  top: 5%;
  width: 100%;
  text-align: center;
  border: 5px solid lightblue;
  border-radius: 0.7rem;
  border-bottom-color: #008080;
  background-color: #f0fff0;
`;
