import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import { ServiceCard } from "../../components/serviceCard";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title1 = styled.h1`
  font-weight: 900;
  color: #000;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const Title2 = styled.h1`
  font-weight: 900;
  color: ##F3F3F3;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;


export function Services(props) {
  

  

  return (
    <ServicesContainer>
      <Title1>BITCHANGETRADING</Title1> <Title2> FEATURES</Title2>
      
    </ServicesContainer>
  );
}
