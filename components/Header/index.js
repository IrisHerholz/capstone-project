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
  overflow: hidden;
  background-color: #f1f1f1;
  position: relativ;
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
`;
