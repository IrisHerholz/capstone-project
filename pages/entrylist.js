import React, { useState } from "react";
export default function EntryFormPage(newEntry) {
  const [journalEntries, setJournalEntries] = useState([]);
  return (
    <>  
      <header>
        <h2>List of Entries</h2>
      </header>
      <ul>
        {journalEntries.length > 0 ? (
          journalEntries.map((journalEntry) => {
            return (
              <li key={newEntry.id}>
                <p> {journalEntry.name}</p> 
                <p> from {journalEntry.from} to {journalEntry.to}</p>
                <p> Title: {journalEntry.entryTitle}</p>
                <p> Entry: {journalEntry.journalEntry}</p>
              </li>
            );
          })
        ) : (
          <li>No entries found</li>
        )}
      </ul>
    </>
  );
}