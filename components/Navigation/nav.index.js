import React from "react";
import link from "next/link";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledFooter>
      <StyledNav>
        <ul>
          <StyledNextLinkHome href="/">HOME</StyledNextLinkHome>
          <StyledNextLinkEntrylist href="/EntryListPage">
            ENTRYLIST
          </StyledNextLinkEntrylist>
        </ul>
      </StyledNav>
    </StyledFooter>
  );
};
export default NavBar;

const StyledFooter = styled.footer`
  font-size: 10pt;
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
  color: black;
padding: 2px;
  magin 2px;
  border: 2px solid black;
  color: black;
`;

const StyledNextLinkHome = styled(link)`
padding: 10px;
  magin 2px;
  border: 2px solid black;
text-decoration: none;`;

const StyledNextLinkEntrylist = styled(link)`
padding: 10px;
  magin 2px;
  border: 2px solid black;
text-decoration: none;`;
