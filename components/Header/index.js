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
  background-color: #6495ed;
  postion: fixed; 
  display: center;
  text-align: center;
  line-height: 2em;
  padding: 10px;
  margin: 10px;
  border: 5px solid lightblue;
  border-radius: 1em;
  border-bottom-color: darkblue;
  color: darkblue;
  font-weight: 0,5em;
`;
