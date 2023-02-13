import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Navigation = () => {
  const router = useRouter();
  return (
    <StyledFooter>
      <StyledNav>
        <StyledNextLink
          href="/"
          className={router.pathname === "/" ? "active" : ""}
        >
          HOME
        </StyledNextLink>
        <StyledNextLink
          href="addNewEntryPage"
          className={router.pathname === "/addNewEntryPage" ? "active" : ""}
        >
          NEW ENTRY
        </StyledNextLink>
        <StyledNextLink
          href="/entryListPage"
          className={router.pathname === "/entryListPage" ? "active" : ""}
        >
          ENTRYLIST
        </StyledNextLink>
      </StyledNav>
    </StyledFooter>
  );
};
export default Navigation;

//styled-components

const StyledFooter = styled.footer`
  position: relative;
  display: center;
  border: 5px solid lightblue;
  border-radius: 0, 7em;
  border-bottom-color: #008080;
  color: papayawhip;
  background-color: #5f9ea0;
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledNextLink = styled(Link)`
  padding: 10px;
  margin: 10px;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 1rem;
  &.active {
    background-color: lightblue;
  }
`;
