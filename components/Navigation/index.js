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
  background-color: #6495ed;
  color: darkblue;
  line-height: 1rem;
  padding: 0px;
  margin: 0px;
  border: 5px solid lightblue;
  border-radius: 1em;
  font-size: 0.85em;
  border-bottom-color: darkblue;
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
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 1rem;
  &.active {
    background-color: lightblue;
  }
`;
