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

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;



const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Services(props) {
  const [offeredServices, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isServicesEmpty =
    !offeredServices || (offeredServices && offeredServices.length === 0);

  

  return (
    <ServicesContainer>
      <Title1>BITCHANGETRADING</Title1> <Title2> FEATURES</Title2>
      
    </ServicesContainer>
  );
}
