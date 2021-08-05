import React from 'react';
import { useHistory } from 'react-router-dom';
import { LogoBtn } from '../LogoBtn/LogoBtn';
import { Navigation } from './Navigation';

import './Header.css';

const hideHeader = () => {
  const { pathname } = useHistory().location;

  if (pathname === '/signup' || pathname === '/signin' || pathname === '/404') {
    return true;
  }
  return false;
};

export const Header = (props) => {
  const { isLoggedIn, toggleShading } = props;
  return (
    hideHeader() ? <></> : <header className={'header'}>
      <LogoBtn />
      <Navigation
        toggleShading={toggleShading}
        isLoggedIn={isLoggedIn}/>
    </header>
  );
};
