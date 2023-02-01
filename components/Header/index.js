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

const StyledHeader = styled.header`
  background-color: #f1f1f1;
  position: relative;
  text-align: center;
  color: black;
  font-size: 1.125em;
  line-height: 1.6em;
  padding: 0px;
  margin: 0px;
  height: 100%;
  top: 20px;
  border: 1px solid lightgrey;
`;
