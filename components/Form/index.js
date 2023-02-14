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
      <StyledForm onSubmit={handleSubmit}>
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
        <div>
          <label htmlFor="from">from</label>
          <input id="from" name="from" type="date" />
          <label htmlFor="to">to</label>
          <input id="to" name="to" type="date" />
        </div>
        <label htmlFor="entryTitle">Entry Title:</label>
        <input
          id="entryTitle"
          name="entryTitle"
          type="text"
          maxLength="35"
          pattern="^[^\sa0-9].*$"
          required
        />
        <label htmlFor="entry">Journal Entry:</label>
        <StyledInput
          id="entry"
          rows="10"
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
`;

const StyledForm = styled.form`
  margin-top: 30px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2em;
  gap: 1em;
`;
