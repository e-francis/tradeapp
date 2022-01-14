import React from 'react';
import { Button } from './button';
import './accountTypes.css';
import styled from "styled-components";
import   Navbar   from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

function accountTypes() {
  return (
    <>
    <Navbar />
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/customer/access/signin' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Silver</h3>
                <h4>$1,000</h4>
                <ul className='pricing__container-features'>
                  <li>Withdrawal Proces within 7 business days</li>
                  <li>24/7 Customer support</li>
                  <li>Exclusive eBook</li>
                  <li>Unlimited Bandwidth</li>
                  <li>Profit on Trades</li>
                  <li>Daily Market Review</li>
                  <li>Majority of our clients start with Silver Account. Free Consultations Included</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/customer/access/signin' className='pricing__container-card1'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$3,000</h4>
                <ul className='pricing__container-features1'>
                  <li>Withdrawal process 5 business days</li>
                  <li>24/7 customer support</li>
                  <li>Exclusive eBook</li>
                  <li>Personal Account Manager</li>
                  <li>Monthly trading session</li>
                  <li>2 Daily trading signals</li>
                  <li>One session with analyst</li>
                  <li>50% Profit on Trades</li>
                  <li>Smart investments start with Gold account. Get most from your account with privileged features</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/customer/access/signin' className='pricing__container-card2'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$5,000</h4>
                <ul className='pricing__container-features'>
                  <li>Withdrawal Process Immediate</li>
                 <li>24/7 customer support</li>
                  <li>Exclusive eBook</li>
                  <li>Personal Account Manager</li>
                  <li>Weekly trading session</li>
                  <li>5 Daily trading signals</li>
                  <li>100% Profit on Trades</li>
                  <li>Weekly session with analyst</li>
                  <li>Daily market review</li>
                  <li>Our best expertise and exclusive account management for serious investors</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
    <Footer />
    </>
  );
}
export default accountTypes;