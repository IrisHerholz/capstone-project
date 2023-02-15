import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import fakeEntries from "../db.json";
import { nanoid } from "nanoid";
import styled from "styled-components";

import FormComponent from "@/components/Form";

export default function EntryListHome() {
  const [journalEntries, setJournalEntries] = useLocalStorageState(
    "newJournalEntry",
    {
      defaultValue: [...fakeEntries],
    }
  );

  const [editingEntry, setEditingEntry] = useState(null);

  const addJournalEntry = (newJournalEntry) => {
    setJournalEntries((oldJournalEntries) => [
      { id: nanoid(), ...newJournalEntry },
      ...oldJournalEntries,
    ]);
  };

  function handleEditJournalEntry(editedEntry) {
    setJournalEntries((oldJournalEntries) =>
      oldJournalEntries.map((journalEntry) => {
        if (journalEntry.id === editingEntry.id) {
          return {
            id: journalEntry.id,
            ...editedEntry,
          };
        }
        return journalEntry;
      })
    );
    setEditingEntry(null);
  }
  function handleDeleteJournalEntry(id) {
    setJournalEntries((oldJournalEntries) =>
      oldJournalEntries.filter((journalEntry) => journalEntry.id !== id)
    );
  }
  function handleOpenEditForm(id) {
    const entryToEdit = journalEntries.find((entry) => entry.id === id);
    setEditingEntry(entryToEdit);
  }
  function handleCloseEditForm() {
    setEditingEntry(null);
  }

  return (
    <>
      <StyledHeader>List of Entries</StyledHeader>
      <section>
        {journalEntries &&
          journalEntries.map((journalEntry) => (
            <StyledEntry key={journalEntry.id}>
              <h4>Destination: {journalEntry.destination}</h4>
              <div>
                From {journalEntry.from} to {journalEntry.to}
              </div>
              <h5>Title: {journalEntry.entryTitle}</h5>
              <p>{journalEntry.entry}</p>
              <StyledButton
                type="button"
                onClick={() => handleDeleteJournalEntry(journalEntry.id)}
              >
                Delete
              </StyledButton>
              <StyledButton
                type="button"
                onClick={() => handleOpenEditForm(journalEntry.id)}
              >
                Edit
              </StyledButton>
            </StyledEntry>
          ))}
      </section>
      {editingEntry && (
        <EditFormWrapper>
          <FormComponent
            onSubmitEvent={handleEditJournalEntry}
            initialEntry={editingEntry}
          />
          <StyledButton type="button" onClick={handleCloseEditForm}>
            Close
          </StyledButton>
        </EditFormWrapper>
      )}
    </>
  );
}

const StyledEntry = styled.form`
  border-radius: 70px 30px;
  margin: 1px;
  text-align: center;
  font-size: 0.6rem;
  text-align: center;
  border: 5px solid lightblue;
  border-radius: 0.7rem;
  border-bottom-color: #008080;
  background-color: #f0fff0;
`;
const StyledHeader = styled.h2`
  font-size: 1.5em;
  left: 0;
  top: 2%;
  width: 100%;
  text-align: center;
  border: 5px solid lightblue;
  border-radius: 0.7rem;
  border-bottom-color: #008080;
  background-color: #f0fff0;
`;
const EditFormWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin-bottom: 200%;
  font-size: 1em;
  background-color: #f0fff0;
`;

const StyledButton = styled.button`
  margin: 10px;
  font-size: 0.9em;
  font-weight: bold;
  border-radius: 1rem;
  background-color: white;
  color: #008080;
  border: 2px solid #008080;
  &:hover {
    background-color: #008080;
    color: lightpink;
  }
`;
