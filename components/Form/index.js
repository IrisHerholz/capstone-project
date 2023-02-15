import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

export default function FormComponent({ onSubmitEvent = () => {}, cityname }) {
  const router = useRouter();

  const [city, setCity] = useState(router?.query?.output);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitEvent({
      id: nanoid(),
      destination: cityname?.output,
      destination: data.destination,
      from: data.from,
      to: data.to,
      entryTitle: data.entryTitle,
      entry: data.entry,
    });
    setCity(cityname?.output);
    event.target.reset();
  }
  return (
    <> 
    <main>
    
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="destination">Your Destination:</label>
        <StyledInput
       
          name="destination"
          //pattern="[A-Z0-9]+"
          required
          id="destination"
          type="text"
          value={city}
          onChange={() => setCity(cityname?.output)}
        />
        <div>
          <label htmlFor="from">from</label>
          <input id="from" name="from" type="date" />
          <label htmlFor="to">to</label>
          <input id="to" name="to" type="date" />
        </div>
        <label htmlFor="entryTitle">Entry Title:</label>
        <StyledInput
          id="entryTitle"
          name="entryTitle"
          type="text"
          maxLength="35"
          //pattern="[A-Z0-9]+"
          required
        />
        <label htmlFor="entry">Journal Entry:</label>
        <StyledInput    
          id="entry"
          type="text"
          name="entry"
          maxLength="300"
          //pattern="^[^\sa0-9].*$"
          required
        />
        <StyledButton type="submit">submit</StyledButton>
      </StyledForm>
      </main>
    </>
  );
}

const StyledInput = styled.input`
border-radius: 8px;
line-hight: 5;
border-color: lightblue;
`;

const StyledForm = styled.form`  
margin-top: 30%;
margin-left: 5%;
margin-right: 5%;
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 20px;
  box-shadow: 10px 10px 15px silver;
  font-size: 1.2em;
  font-weight: kursiv;
  gap: 0.5em;
  background-color: #fffaf0;
`;

const StyledButton = styled.button`
width: 40%;
font-size: 0.7em;
border-radius: 8px;
background-color: white;
color: #008080;
border: 2px solid #008080;
&:hover {
  background-color: #008080;
  color: white;
  cursor: pointer;
  }
`;
