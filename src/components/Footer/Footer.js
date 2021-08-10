import React from 'react';
import { useHistory } from 'react-router-dom';

import ToggleableLink from '../TogleableLink/TogglableLink';
import './Footer.css';

export const Footer = (props) => {
  const history = useHistory();
  const year = new Date().getFullYear();

  const hideFooter = () => {
    const { pathname } = history.location;
    if (pathname === '/signup' || pathname === '/signin' || pathname === '/profile' || pathname === '/404') {
      return true;
    }
    return false;
  };
  const getFooterLink = (href, title, disabled) => (
    <li className={'footer__item'}>
      <ToggleableLink
        external={true}
        disabled={disabled}
        className={'footer__link'}
        to={href}>
        {title}
      </ToggleableLink>
    </li>
  );

  return (
    hideFooter() ? <></>
      : <footer className={'footer'}>
        <h3 className={'footer__heading'}>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className={'footer__bottom'}>
          <p className={'copyright'}>
            &copy; {year}
          </p>
          <ul className={'footer__links'}>
            {getFooterLink('https://praktikum.yandex.ru/', 'Яндекс.Практикум', props.disabled)}
            {getFooterLink('https://github.com/cookiepatov/', 'GitHub', props.disabled)}
            {getFooterLink('https://www.facebook.com/Cookiepatov/', 'Facebook', props.disabled)}
          </ul>
        </div>
      </footer>
  );
};
