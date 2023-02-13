import useLocalStorageState from "use-local-storage-state";
import FormComponent from "@/components/Form";
import { useRouter } from "next/router";
import EntryListHome from "./entryListPage"
import styled from "styled-components";



export default function EntryFormPage() {
  const router = useRouter();

  const [journalEntries, setJournalEntries] = useLocalStorageState("newJournalEntry");
  
  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
    
    <EntryListHome data={journalEntries} />
  };
  return (
    <>
        <h2>Add an Entry</h2>
      <FormComponent onSubmitEvent={addJournalEntry} cityname = {router.query} />
    </>
  );
}
