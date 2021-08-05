import React from 'react';
import { Link } from 'react-router-dom';

import './LogoBtn.css';

import logo from '../../images/C-logo.svg';

export const LogoBtn = () => (
  <div>
    <Link
      className={'logoBtn'}
      to={'/'} >
      <img src={logo} alt={'Логотип'} />
    </Link>
  </div>
);
