import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../images/service/vfsc.png";
import Service2Img from "../../images/service/multi.jpg";
import Service3Img from "../../images/service/security.jpg";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          compnay needs"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Mobile optimized"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          compnay needs"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Quality is our priority"
        description="We have teams of professional developers, designers
        and managers that ensures delivering the best 
        software quality for your company"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}