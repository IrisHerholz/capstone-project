//import entries from "@/atoms/entries";
//import { useAtom } from "jotai";
//const [journalEntries, setJournalEntries] = useAtom(entries);
//function handleAddEntry(newEntry) {
//setJournalEntries((prevEntries) => [...prevEntries, newEntry]);

import Form from "@/components/Form";
import JournalEntryList from "@/components/JournalEntryList";

export default function AddNewEntry({ handleSubmit }) {
  return (
    <>
      <Form handleSubmit={handleSubmit} />
    </>
  );
}
