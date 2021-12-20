import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import { Link } from "react-router-dom"; 
import { Carousel } from 'antd';

import TopSectionBackgroundImg from "../../images/homepage.jpg";
import TheBestSpecialistsImg from "../../images/logot.jpg";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(30, 70, 83, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CarouselImage = styled.div`
  width: 50em;
  height: 34em;

  img {
    width: 100%;
    height: 100%;
  }
&:hover {
    filter: contrast(0.6);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const carouselStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
;


const SloganText = styled.h3`
  margin: 0;
  line-height: 1.5;
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  font-family: gothic;
  motion: x: 100, y: -100

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
        <Carousel autoplay>
    
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}
            />
          
  
            <Marginer direction="vertical" margin={8} />
            <SloganText>MARKET MAY CHANGE,</SloganText>
            <SloganText>GOOD INVESTMENT ADVICE</SloganText>
             <SloganText>IS TIMELESS.</SloganText>
            <Marginer direction="vertical" margin={15} />
            <Link to="/customer/access/signup">
            <Button>Join Now</Button>
            </Link>
          </LogoContainer>
          </Carousel>
        </TopSectionInnerContainer>
      </BackgroundFilter>

    </TopSectionContainer>
  );
}
