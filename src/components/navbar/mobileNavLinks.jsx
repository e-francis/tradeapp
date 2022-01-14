import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Accessibility } from "./accsessibilty";
import { MenuToggle } from "./menuToggle";

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
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #1c2237;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    color: #2ecc71;
  }
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
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
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}