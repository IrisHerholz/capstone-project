import styled from "styled-components";

export default function FormComponent({
  onSubmitEvent = () => {}
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
    onSubmitEvent({
      destination: data.destination,
      from: data.from,
      to: data.to,
      entryTitle: data.entryTitle,
      entry: data.entry,
    });
    event.target.reset();
  }
  return ( 
<>
  <StyledForm   onSubmit={(event) => handleSubmit(event)}>
    <label htmlFor="destination">Your Destination:</label>
    <StyledInput
      name="destination"
      pattern="^[^\sa0-9].*$"
      required
      id="1"
      type="text"
    />
    <StyledDate> 
    <label htmlFor="from">START</label>
      <input
        id="2"
        name="from"
        type="date"
      />
      <label htmlFor="to">END</label>
      <input
        id="3"
        name="to"
        type="date"
      />
      </StyledDate>
      <label htmlFor="entryTitle">Entry Title:</label>
      <input
        id="4"
        name="entryTitle"
        type="text"
        maxLength="33"
        pattern="^[^\sa0-9].*$"
        required
      />
      <label htmlFor="entry">Journal Entry:</label>
      <StyledInput
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
  color: drakblue;
  gap: 0,5rem;
  padding: 10px;
  margin: 10px;
  background-color: #white;
`;
const StyledDate = styled.p`
display: center;
flex-direction: row;
gap: 3em;
`;
