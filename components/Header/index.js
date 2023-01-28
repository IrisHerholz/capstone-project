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
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  position: relativ;
  text-align: center;
  color: black;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
`;
