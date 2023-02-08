import styled from "styled-components";
import { useState } from "react";

export default function EntryListComponent( data  ) {
  return (
    <>
      <EntryListStyle>
          <ListEntry key={data.id}>
          <p> Destination: {data.destination}</p> 
            <p> {data.from}  to  {data.to}</p>
            <p> Title: {data.entryTitel}</p>
            <p> Entry: {data.journalEntry}</p>
          </ListEntry>
      </EntryListStyle>
    </>
  );
}


const ListEntry = styled.li`
  position: relative;
  font-size: 1em;
  text-align: center;
  list-style-position: inside;
  background: lightgray;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  padding: 3px;
`;
const EntryListStyle = styled.ul`
  max-width: 368px;
  list-style: none;
  margin: 0 auto;
  padding: 0 0 3rem 0;
`;