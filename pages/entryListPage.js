import { v4 as uuidv4 } from "uuid";
import fakeJournalEntries from "db.json";
import useLocalStorageState from "use-local-storage-state";



export default function EntryListHome() {
  const [journalEntries, setJournalEntries] = useLocalStorageState("journalEntries", {
    defaultValue: [...fakeJournalEntries],
  });

  const addJournalEntry = (newJournalEntry) => {
    setJournalEntries((oldJournalEntries) => [
      {
        ...newJournalEntry,
        id: uuidv4(),
      },
      ...oldJournalEntries,
    ]);
  };

  return (
    <>
      <header>
        <h2>List of Entries</h2>
      </header>
      <ul>
        {journalEntries.map((journalEntry) => {
          return (
            <li key={journalEntry.id}>
              <p>{journalEntry.destination}</p>
              <p>
                von {journalEntry.from} bis {journalEntry.to}
                          </p>
              <p>Titel: {journalEntry.entryTitle}</p>
              <p>Entry: {journalEntry.journalEntry}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}