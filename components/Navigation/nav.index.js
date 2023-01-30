import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Navigation = () => {
  const router = useRouter();
  return (
    <StyledFooter>
      <StyledNav>
        <StyledNextLinkHome
          href="/"
          className={router.pathname === "/" ? "active" : ""}
        >
          HOME
        </StyledNextLinkHome>
        <StyledNextLinkBook
          href="/EntryListPage"
          className={router.pathname === "/EntryListPage" ? "active" : ""}
        >
          ENTRYLIST
        </StyledNextLinkBook>
      </StyledNav>
    </StyledFooter>
  );
};
export default Navigation;

const StyledFooter = styled.footer`
  font-size: 0.8em;
  position: fixed;
  bottom: 0;
  color: black;
  width: 100%;
  height: 75px;
  border: 1px solid black;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2px;
  margin: 2px;
  border: 1px solid black;
  color: black;
`;
const StyledNextLinkHome = styled(Link)`
  padding: 10px;
  margin: 20px;
  border: 2px solid black;
  &.active {
    background-color: lightgrey;
  }
`;
const StyledNextLinkBook = styled(Link)`
  padding: 10px;
  margin: 20px;
  border: 2px solid black;
  &.active {
    background-color: lightgrey;
  }
`;
