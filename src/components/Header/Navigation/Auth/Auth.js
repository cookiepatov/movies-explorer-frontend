import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import authSvg from '../../../../images/account-logo.svg';
import './Auth.css';

const Auth = (props) => {
  const { isLoggedIn, onClick } = props;
  return (
  <div className={'auth'}>
    {isLoggedIn
      ? <div className={'auth__accout'}>
        <Link
          className={'auth__link'}
          to={'/profile'}
          onClick={onClick}>
          Аккаунт
        </Link>
        <Link
          className={'auth__link auth__link_img '}
          to={'/profile'}
          onClick={onClick}>
          <img src={authSvg} alt={'Аккаунт'} className={'auth-img'}/>
        </Link>
      </div>
      : <>
        <Link
          className={'auth__link auth__link_small'}
          to={'/signup'}>
          Регистрация
        </Link>
        <Link className={'auth__link auth__link_green auth__link_small'}
          to={'/signin'}>
          Войти
        </Link>
      </>
    }
  </div>
  );
};

export default withRouter(Auth);
