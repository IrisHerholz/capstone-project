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

export const StyledHeader = styled.header`
  padding: 12px;
  background-color: #f1f1f1;
  position: relative;
  text-align: center;
  color: black;
  font-size: 1.125em;
  line-height: 25px;
  border-radius: 4px;
`;
