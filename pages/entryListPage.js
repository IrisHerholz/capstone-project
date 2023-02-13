import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import fakeEntries from "../db.json";


export default function EntryListHome() {
    const [journalEntries, setJournalEntries] = useLocalStorageState("newJournalEntry", {
      defaultValue: [...fakeEntries],
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
        {journalEntries?.map((journalEntry) => {
          return (
            <li key={journalEntry?.id}>

              <p>{journalEntry?.destination}</p>
              <p>
              from {journalEntry?.from} to {journalEntry?.to}
                          </p>
              <p>Titel: {journalEntry?.entryTitle}</p>
              <p>Entry: {journalEntry?.entry}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
