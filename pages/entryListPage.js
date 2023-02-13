
import useLocalStorageState from "use-local-storage-state";
import fakeEntries from "../db.json";
import { nanoid } from "nanoid";

export default function EntryListHome() {
    const [journalEntries, setJournalEntries] = useLocalStorageState("newJournalEntry", {
      defaultValue: [...fakeEntries],
    });

  const addJournalEntry = (newJournalEntry) => {
    setJournalEntries((oldJournalEntries) => [
      { id: nanoid(),
        ...newJournalEntry,
      },
      ...oldJournalEntries,
    ]);
  };

  function handleDeleteJournalEntry(id) {
    setJournalEntries(journalEntries.filter((JournalEntry) => JournalEntry.id !== id)
    );
  };

  return (
    <>
      <header>
        <h2>List of Entries</h2>
      </header>
      <ul>
        {journalEntries.map((journalEntry) => (
          <li key={journalEntry.id}>
            <p>{journalEntry.destination}</p>
            <p>
              from {journalEntry.from} to {journalEntry.to}
            </p>
            <p>Titel: {journalEntry.entryTitle}</p>
            <p>Entry: {journalEntry.entry}</p>
            <button type="delete" onClick={() => handleDeleteJournalEntry(journalEntry.id)}>
delete
</button>
          </li>
        ))}
      </ul>
    </>
  );
}