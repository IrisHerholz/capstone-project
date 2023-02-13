import useLocalStorageState from "use-local-storage-state";
import fakeEntries from "../db.json";
import { nanoid } from "nanoid";

export default function EntryListHome() {
  const [journalEntries, setJournalEntries] = useLocalStorageState(
    "newJournalEntry",
    {
      defaultValue: [...fakeEntries],
    }
  );

  const addJournalEntry = (newJournalEntry) => {
    setJournalEntries((oldJournalEntries) => [
      { id: nanoid(), ...newJournalEntry },
      ...oldJournalEntries,
    ]);
  };
  function handleDeleteJournalEntry(id) {
    setJournalEntries(
      journalEntries.filter((journalEntry) => journalEntry.id !== id)
    );
  }
  return (
    <>
      <header>
        <h2>List of Entries</h2>
      </header>
      <ul>
        {journalEntries.map((journalEntry) => (
          <li key={journalEntry.id}>
            <h3>{journalEntry.destination}</h3>
            <div>
              from {journalEntry.from} to {journalEntry.to}
            </div>
            <h4>Titel: {journalEntry.entryTitle}</h4>
            <p>{journalEntry.entry}</p>
            <button
              type="button"
              onClick={() => handleDeleteJournalEntry(journalEntry.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
