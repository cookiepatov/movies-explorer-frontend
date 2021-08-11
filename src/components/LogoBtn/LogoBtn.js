import React from 'react';

import './LogoBtn.css';

import logo from '../../images/C-logo.svg';
import ToggleableLink from '../TogleableLink/TogglableLink';

export const LogoBtn = (props) => (
  <div className={'link-container'}>
    <ToggleableLink
      disabled={props.disabled}
      className={'logoBtn'}
      to={'/'} >
      <img src={logo} alt={'Логотип'} className={'logoBtn__logo'} />
    </ToggleableLink>
  </div>
);
