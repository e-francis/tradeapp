import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; 

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    color: #2ecc71;
  }
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Links to="/">Home</Links>
        </LinkItem>
        <LinkItem>
          <Links href="#">FAQ</Links>
        </LinkItem>
        <LinkItem>
          <Links to="/accountTypes">Account Types</Links>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}