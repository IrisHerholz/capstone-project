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
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 1rem;
  background-color: #6495ed;
  color: darkblue;
  border: 5px solid lightblue;
  border-radius: 1em;
  border-bottom-color: darkblue;
`;
