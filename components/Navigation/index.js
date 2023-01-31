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
          href="entryform"
          className={router.pathname === "entryform" ? "active" : ""}
        >
          NEW ENTRY
        </StyledNextLink>
        <StyledNextLink
          href="/entrylist"
          className={router.pathname === "/entrylist" ? "active" : ""}
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
  font-size: 0, 5em;
  position: fixed;
  bottom: 0;
  color: black;
  width: 100%;
  height: 70px;
  border: 1px solid black;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px;
  margin: 0px;
  border: 1px solid black;
  color: black;
`;
const StyledNextLink = styled(Link)`
  padding: 10px;
  margin: 20px;
  border: 2px solid black;
  &.active {
    background-color: lightgrey;
  }
`;
