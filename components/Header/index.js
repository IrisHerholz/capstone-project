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
  text-align: center;
  color: #87cefa;
  font-size: 2em;
  line-height: 2em;
  padding: 10px;
  margin: 30px;
  top: 10px;
  border: 1px solid lightgray;
  border-radius: 2em;
  font-size: 1rem;
`;
