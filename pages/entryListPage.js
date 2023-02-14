import useLocalStorageState from "use-local-storage-state";
import fakeEntries from "../db.json";
import { nanoid } from "nanoid";
import styled from "styled-components";

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
      <body>
        <StyledHeader>List of Entries</StyledHeader>
        <ul>
          {journalEntries.map((journalEntry) => (
            <StyledEntry key={journalEntry.id}>
              <h4>{journalEntry.destination}</h4>
              <div>
                from {journalEntry.from} to {journalEntry.to}
              </div>
              <h5>Titel: {journalEntry.entryTitle}</h5>
              <p>{journalEntry.entry}</p>
              <button
                type="button"
                onClick={() => handleDeleteJournalEntry(journalEntry.id)}
              >
                delete
              </button>
            </StyledEntry>
          ))}
        </ul>
      </body>
    </>
  );
}

const StyledEntry = styled.li`
  display: flex;
  text-align: center;
  flex-direction: column;
`;
const StyledHeader = styled.h2`
  text-align: center;
`;
