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
  position: fixed;
  bottom: 20px;
  color: black;
  width: 100%;
  background-color: #6495ed;
  text-align: center;
  color: #87cefa;
  line-height: 1em;
  border: 2px solid lightgray;
  border-radius: 2em;
  font-size: 2em;
  padding: 10px;
  margin: 30px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledNextLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  margin: 30px;
  border-radius: 1rem;
  &.active {
    background-color: lightblue;
  }
`;
