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
          <StyledHeader>Edit Entry</StyledHeader>
          <FormComponent
            onSubmitEvent={handleEditJournalEntry}
            onCancelEvent={handleCloseEditForm}
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

const StyledEntry = styled.li`
  display: flex;
  text-align: center;
  flex-direction: column;
`;
const StyledHeader = styled.h2`
  text-align: center;
`;
const EditFormWrapper = styled.div`
  position: fixed;
  top: 5px;
  bottom: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: lightpink;
  font-weight: bold;
`;
const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;
  font-size: 0.6em;
  font-weight: bold;
  border-radius: 1rem;
  background-color: white;
  color: #008080;
  border: 2px solid #008080;
  &:hover {
    background-color: #008080;
    color: white;
  }
`;
