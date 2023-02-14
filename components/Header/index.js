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
  background-color: #5f9ea0;
  border: 5px solid lightblue;
  border-radius: 0, 7em;
  border-bottom-color: #008080;
  color: papayawhip;
`;
