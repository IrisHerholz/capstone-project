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
          home
        </StyledNextLink>
        <StyledNextLink
          href="addNewEntryPage"
          className={router.pathname === "/addNewEntryPage" ? "active" : ""}
        >
new entry        </StyledNextLink>
        <StyledNextLink
          href="/entryListPage"
          className={router.pathname === "/entryListPage" ? "active" : ""}
        >
          entrylist
        </StyledNextLink>
      </StyledNav>
    </StyledFooter>

  );
};
export default Navigation;

//styled-components

const StyledFooter = styled.footer`
border-radius: 0.7rem;
position: fixed;
left: 0;
bottom: 3%;
width: 100%;
height: 10%;
color: white;
background-color: #f0fff0;
text-align: center;
  border: 5px solid lightblue;
  border-radius: 0, 7em;
  border-bottom-color: #008080;
`;
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledNextLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  border-radius: 0.7rem;
  &.active {
    background-color: pink;
  }
  padding: 10px;
  margin: 10px;
  font-size: 1em;
  color: #008080;
  &:hover {
    background-color: #008080;
    color: white;
    cursor: pointer;
  }
`;

