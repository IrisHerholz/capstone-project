import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import EntryListHome from "@/pages/entryListPage";

export default function FormComponent({
  onSubmitEvent = () => {}, cityname
}) {
  const router = useRouter();

  const [city, setCity] = useState(router?.query?.output);


  function handleSubmit(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
 onSubmitEvent({
      destination: cityname?.output,
      from: data.from,
      to: data.to,
      entryTitle: data.entryTitle,
      entry: data.entry,
    });
    
    router.query.data=data;
  <EntryListHome data={data}/>
    
    setCity(cityname?.output)
    event.target.reset();
  }
  return ( 
<>
  <StyledForm  onSubmit={handleSubmit}>
    <label htmlFor="destination">Your Destination:</label>
    <StyledInput
      name="destination"
      pattern="^[^\sa0-9].*$"
      required
      id="destination"
      type="text"
      value={city}
          onChange={() => setCity(cityname?.output)}
    />
    <StyledDate> 
    <label htmlFor="from">START</label>
      <input
        id="from"
        name="from"
        type="date"
      />
      <label htmlFor="to">END</label>
      <input
        id="to"
        name="to"
        type="date"
      />
      </StyledDate>
      <label htmlFor="entryTitle">Entry Title:</label>
      <input
        id="entryTitle"
        name="entryTitle"
        type="text"
        maxLength="33"
        pattern="^[^\sa0-9].*$"
        required
      />
      <label htmlFor="entry">Journal Entry:</label>
      <StyledInput
      id="entry"
        rows="5"
        type="text"
        name="entry"
        maxLength="200"
        pattern="^[^\sa0-9].*$"
        required
      />
      <button type="submit">save entry</button>
    </StyledForm>
</>
  );
}
const StyledInput = styled.input`
padding: 1px;
margin: 1px;
font-size: 1em;
font-weight: bold;
text-decoration: none;
background-color: lightblue;
display: center;
`;
const StyledForm = styled.form`
  display: grid;
  top: 50px;
  border: 2px solid black;
  border-radius: 2rem;
  gap: 0,5rem;
  padding: 10px;
  margin: 10px;
  background-color: white;
`;
const StyledDate = styled.p`
display: center;
flex-direction: row;
gap: 3em;
`;
