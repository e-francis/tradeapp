import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Link } from "react-router-dom";
import { Marginer } from "../../components/marginer";

import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import FooterSectionBackgroundImg from "../../images/footer.png";


const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  background: url(${FooterSectionBackgroundImg}) no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0px 30px;
    
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  font-size: 10px;
  align-items: flex-start;
  flex-direction: column;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: left;
    font-size: 10px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 3%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottomContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const LeftBottomContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
   &:hover {
    color: #485412;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.5;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  padding-top: 1em;

  &:hover {
    color: #0D2D19;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 11px;
    font-weight: bold;
  }
`;

const PrivacyText = styled.h6`
  color: #F3F3F3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  text-align: left;

  &:hover {
    color: #0D2D19;
  }

  @media screen and (max-width: ${deviceSize.mobile,}px) {
    font-size: 10px;
  }
`;

const PrivacyTextQ = styled.h6`
  color: #F3F3F3;
  font-size: 15px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;

  &:hover {
    color: #0D2D19;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 10px;
  }
`;

const PrivacyTextQ1 = styled.h6`
  color: #F3F3F3;
  font-size: 14px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  

  &:hover {
    color: #0D2D19;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 10px;
  }
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    color: #0D2D19;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;


const SocialIcon = styled.div`
  color: #0D2D19;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #ffff;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 15px;
  }
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile, maxWidth: deviceSize.desktop, maxWidth: deviceSize.laptop, maxWidth: deviceSize.tablet  });

  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
        <LogoContainer>
          <BrandLogo
              logoSize={isMobile ? 33 : 40}
              textSize={isMobile ? 28 : 35}
              />
            
            </LogoContainer>
            <SloganText>
          Trading and investing in digital options involves significant level of risk and is not suitable for all clients.
            Please make sure you carefully consider your investment 
            your investment objectives, level of experience and risk appetite before buying or selling any digital option. 
            Buying or selling digital options entails financial risks
             and could result in a partial or complete loss of your funds, therefore, you should
              not invest funds you cannot afford to lose. You should  be aware of and fully
            understand all the risks associated with trading and investing in digital options,
             and seek advice from an independent financial advisor if you have any doubts.
            </SloganText>
            <Marginer direction="vertical" margin={8} />
          </ContentContainer>
        
        <ContentContainer>
          <Title>Quick Links</Title>
          <AnchorLink to="/customer/access/signup">
          <PrivacyTextQ>Home</PrivacyTextQ>
          </AnchorLink>
          <AnchorLink to="/customer/access/signup">
          <PrivacyTextQ>Login</PrivacyTextQ>
          </AnchorLink>
          <AnchorLink to="/customer/access/signup">
          <PrivacyTextQ>Join Us</PrivacyTextQ>
          </AnchorLink>
          <AnchorLink to="/customer/access/signup">
          <PrivacyTextQ>FAQ</PrivacyTextQ>
          </AnchorLink>
          <AnchorLink to="/accountTypes">
          <PrivacyTextQ1>AccountTypes</PrivacyTextQ1>
          </AnchorLink>
        </ContentContainer>

        <ContentContainer>
          <Title>Contact Us</Title>
          <SocialIcon>
          <FontAwesomeIcon icon={faEnvelope} />
          <PrivacyText>bitchangetrading@gmail.com</PrivacyText>
          </SocialIcon>
          <SocialIcon>
          <FontAwesomeIcon icon={faEye} />
          <PrivacyText>Door open</PrivacyText>
          <PrivacyText>Mon - Sun : 09:00 - 18:00</PrivacyText>
          </SocialIcon>
        </ContentContainer>

        
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          {< hideLogo color="#F3F3F3" textSize={isMobile ? 20 : 25} />}
          <PrivacyText>bitchangetrading&#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
