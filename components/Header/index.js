import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1>mundus.</h1>
        <p>your travel journal.</p>
      </StyledHeader>
    </>
  );
}
//styled-components

const StyledHeader = styled.header`
margin-top: 9%;
font-size: 1em;
  left: 0;
  top: 2%;
  width: 100%;
  text-align: center;
  border: 5px solid lightblue;
  border-radius: 0.7rem;
  border-bottom-color: #008080;
  background-color: #f0fff0;
`;
