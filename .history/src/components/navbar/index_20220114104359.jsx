import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Accessibility } from "./accsessibilty";
import { NavLinks } from "./navLinks";
import { deviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  //box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  backgroud-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <BrandLogo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}