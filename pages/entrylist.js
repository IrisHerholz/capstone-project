import entries from "/pages/_app.js";
import { useAtom } from "jotai";
import Form from "@/components/Form";
import MyListComponent from "@/components/JournalEntryList";

export default function FomEntry({}) {
  const [journalEntries, setJournalEntries] = useAtom(entries);
  function addEntry(newEntry) {
    setJournalEntries((previousEntries) => [...previousEntries, newEntry]);
  }
  return (
    <main>
      <Form onSubmitEvent={addEntry} />
      <MyListComponent journalEntries={journalEntries} />
    </main>
  );
}
