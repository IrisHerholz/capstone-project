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
  bottom: 20px;
  background-color: #6495ed;
  postion: fixed; 
  display: center;
  text-align: evenly space;
  color: drakblue;
  line-height: 1em;
  padding: 10px;
  margin: 10px;
  border: 5px solid lightblue;
  border-radius: 1em;
  font-size: 1rem;
  border-bottom-color: darkblue;
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
