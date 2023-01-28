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
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 368px;
  top: 30px;
  margin: 0px;
  padding: 0.5em;
  text-align: center;
  border-radius: 1px;
  font-family: monda;
  font-size: 12pt;
  color: #e7e4d8;
  font-weight: light;
  text-align: center;
  background-color: #78c9cc;
`;
