import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1>Travel Journal</h1>
      </StyledHeader>
    </>
  );
}
//styled-components

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  text-align: center;
  border: 5px solid lightblue;
  border-radius: 1.5em;
  border-bottom-color: #008080;
  background-color: white;
`;
