import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";


export default function EntryListHome(data) {
  const router = useRouter();
  const [journalEntries, setJournalEntries] = useLocalStorageState("newJournalEntry", [data]);
console.log("iris", journalEntries, data);
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
                von {journalEntry?.from} bis {journalEntry?.to}
                          </p>
              <p>Titel: {journalEntry?.entryTitle}</p>
              <p>Entry: {journalEntry?.entry}</p>
              <button onClick={() => {
              setJournalEntries(
                journalEntries.filter((id)=>
                id !== journalEntry.id
                )
              );
            }}>
              Delete
            </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
