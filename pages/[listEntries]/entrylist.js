import { useState } from "react";
import Form from "@/components/EntryForm";

export default function EntryList() {
  return <div>Formdata</div>;
  
  const [journalEntries, setJournalEntries] = useState([]); 
   {
function handleAddEntries(newEntry) {
 setJournalEntries([...journalEntries, newEntry]);
  }
return (
    <>
      <main>  
          <StyledSection>
        <Form journalEntries={entry} setJournalEntries={setEntry} />
      <h2>DESTINATION {destination} </h2>
      <p> START {from}</p>
      <p>END {to}</p>
      <p>TITLE {entryTitel}</p>
      <p>ENTRTY {journalEntry}</p>
    </StyledSection>  
     </main>
    </>
  );
}


const StyledSection = styled.section`
  display: grid;
  flex-direction: row;
  top: 100px;
  border: 2px solid black;
  border-radius: 1rem;
  color: black;
  gap: 1rem;
  margin: 0%;
  padding: 20%;
`;