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
  bottom: 20px;
  color: black;
  width: 100%;
  height: 70px;
  border: 1px solid lightgrey;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1px;
  margin: 0px;
  height: 100%;
  background-color: #f1f1f1;
`;
const StyledNextLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  margin: 10px;
  border-radius: 1rem;
  &.active {
    background-color: lightblue;
  }
`;