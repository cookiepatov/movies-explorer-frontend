import React from 'react';

import authSvg from '../../../../images/account-logo.svg';
import ToggleableLink from '../../../TogleableLink/TogglableLink';
import './Auth.css';

export const Auth = (props) => {
  const { isLoggedIn, onClick, disabled } = props;
  return (
  <div className={'auth'}>
    {isLoggedIn
      ? <div className={'auth__accout'}>
        <ToggleableLink
          disabled={disabled}
          className={'auth__link'}
          to={'/profile'}
          onClick={onClick}>
          Аккаунт
        </ToggleableLink>
        <ToggleableLink
          disabled={disabled}
          className={'auth__link auth__link_img '}
          to={'/profile'}
          onClick={onClick}>
          <img src={authSvg} alt={'Аккаунт'} className={'auth-img'}/>
        </ToggleableLink>
      </div>
      : <>
        <ToggleableLink
          disabled={disabled}
          className={'auth__link auth__link_small'}
          to={'/signup'}>
          Регистрация
        </ToggleableLink>
        <ToggleableLink
          className={'auth__link auth__link_green auth__link_small'}
          disabled={disabled}
          to={'/signin'}>
          Войти
        </ToggleableLink>
      </>
    }
  </div>
  );
};
