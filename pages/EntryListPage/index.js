import JournalEntryList from "@/components/JournalEntryList";
import Link from "next/link";

export default function EntryListPage() {
  return (
    <>
      <Link href="/">
        <p>Back</p>
      </Link>
      <JournalEntryList />
    </>
  );
}
