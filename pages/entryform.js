import { useState } from "react";
import EntryForm from "@/components/Form";

export default function EntryFormPage() {
  const [journalEntries, setJournalEntries] = useState([]);

  const addJournalEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
  };
  return (
    <>
      <header>
        <h2>Add an Entry</h2>
      </header>
      <EntryForm onSubmitEvent={addJournalEntry} />
      <header>
        <h2>List of Entries</h2>
      </header>
      <ul>
      {journalEntries.map((journalEntry) => {
        return (
          <li key={journalEntry.name}>
            <p> Destination: {journalEntry.destination}</p> 
            <p> from {journalEntry.from} to {journalEntry.to}</p>
            <p> Title: {journalEntry.entryTitle}</p>
            <p> Entry: {journalEntry.entry}</p>
          </li>
        );
      })}
      </ul>
    </>
  );
}