import JournalEntryList from "@/components/JournalEntryList";
import Link from "next/link";

export default function EntryListPage() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Entries</h1>
      <JournalEntryList />
    </>
  );
}
