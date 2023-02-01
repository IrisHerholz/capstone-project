//import entries from "@/atoms/entries";
//import { useAtom } from "jotai";
//const [journalEntries, setJournalEntries] = useAtom(entries);
//function handleAddEntry(newEntry) {
//setJournalEntries((prevEntries) => [...prevEntries, newEntry]);
// import JournalEntryList from "@/components/JournalEntryList";
import Form from "@/components/Form";
import { useState } from "react";

//const [journalEntries, setJournalEntries] = useAtom();

export default function AddNewEntry({ handleSubmit }) {
  const [journalEntries, setJournalEntries] = useState();

  function handleAddEntry(event) {
    setJournalEntries(event.target.value);
  }
  return (
    <>
      {" "}
      <Form journalEntries={journalEntries} />
    </>
  );
}
