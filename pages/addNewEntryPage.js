import useLocalStorageState from "use-local-storage-state";
import FormComponent from "@/components/Form";


export default function EntryFormPage() {
  const [journalEntries, setJournalEntries] = useLocalStorageState("newJournalEntry", {defaultValue: "no entries" 
  });

  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
  };
  return (
    <>
      <header>
        <h2>Add an Entry</h2>
      </header>
      <FormComponent onSubmitEvent={addJournalEntry} />
    </>
  );
}