import React from 'react';
import { Link } from 'react-router-dom';

import './LogoBtn.css';

import logo from '../../images/C-logo.svg';

export const LogoBtn = () => (
  <div className={'link-container'}>
    <Link
      className={'logoBtn'}
      to={'/'} >
      <img src={logo} alt={'Логотип'} className={'logoBtn__logo'} />
    </Link>
  </div>
);
