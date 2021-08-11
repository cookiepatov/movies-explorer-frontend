import React from 'react';
import { useHistory } from 'react-router-dom';
import { LogoBtn } from '../LogoBtn/LogoBtn';
import { Navigation } from './Navigation';

import './Header.css';

export const Header = (props) => {
  const {
    isLoggedIn, toggleShading, navigationOpened, navButtonClick, disabled,
  } = props;

  const hideHeader = () => {
    const { pathname } = useHistory().location;
    if (pathname === '/signup' || pathname === '/signin' || pathname === '/404') {
      return true;
    }
    return false;
  };

  return (
    hideHeader() ? <></> : <header className={'header'}>
      <LogoBtn disabled={disabled}/>
      <Navigation
        disabled={disabled}
        navigationOpened={navigationOpened}
        toggleShading={toggleShading}
        isLoggedIn={isLoggedIn}
        navButtonClick={navButtonClick}/>
    </header>
  );
};
