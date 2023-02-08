import EntryListComponent from "@/components/EntryList";
import styled from "styled-components";


export default function EntryListPage(data) {
  return (
    <>
    <main> 
      <header>
        <Heading>Your Entries</Heading>
      </header>
       <EntryListComponent data={data}
        />
      </main>
    </>
  );
}

const Heading = styled.h2`
  position: relative;
  text-align: center;
  font-size: 1, 2em;
`;