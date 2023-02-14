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
  function handleEditJournalEntry(id) {
    const newJournalEntries = [...journalEntries];
    const index = newJournalEntries.findIndex((je) => je.id === id);
    newJournalEntries[index] = {
      ...newJournalEntries[index],
      destination: prompt(
        "New destination:",
        newJournalEntries[index].destination
      ),
      entryTitle: prompt("New title:", newJournalEntries[index].entryTitle),
      entry: prompt("New entry:", newJournalEntries[index].entry),
    };
    setJournalEntries(newJournalEntries);
  }
  return (
    <>
      <body>
        <StyledHeader>List of Entries</StyledHeader>
        <section>
          {journalEntries.map((journalEntry) => (
            <StyledEntry key={journalEntry.id}>
              <h4>Destination: {journalEntry.destination}</h4>
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
              <button
                type="button"
                onClick={() => handleEditJournalEntry(journalEntry.id)}
              >
                edit
              </button>
            </StyledEntry>
          ))}
        </section>
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
