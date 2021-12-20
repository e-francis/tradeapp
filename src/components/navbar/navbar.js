import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { FaBars, FaTimes }  from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import './navbar.css';


import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

function navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
      showButton();
  }, []);

window.addEventListener('resize', showButton);


    return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <BrandLogo/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/faq'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/accountTypes'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Account Types
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/customer/access/signin' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Register</Button>
                  </Link>
                ) : (
                  <Link to='/customer/access/signin' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Register
                    </Button>
                  </Link>
                )}
              </li>
              <li className='nav-item'>
                <Link
                  to='/customer/access/signin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default navbar;