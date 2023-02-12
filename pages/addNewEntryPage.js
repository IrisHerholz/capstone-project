import useLocalStorageState from "use-local-storage-state";
import FormComponent from "@/components/Form";
import { useRouter } from "next/router";
import EntryListHome from "./entryListPage";


export default function EntryFormPage() {
  const router = useRouter();

  const [journalEntries, setJournalEntries] = useLocalStorageState("newJournalEntry");
  
  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
    
    <EntryListHome data={journalEntries} />
  };
  return (
    <>
      <header>
        <h2>Add an Entry</h2>
      </header>
      <FormComponent onSubmitEvent={addJournalEntry} cityname = {router.query} />
    </>
  );
}