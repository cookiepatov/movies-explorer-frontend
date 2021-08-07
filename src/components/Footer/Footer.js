import React from 'react';
import { useHistory } from 'react-router-dom';
import './Footer.css';

const hideFooter = () => {
  const { pathname } = useHistory().location;

  if (pathname === '/signup' || pathname === '/signin' || pathname === '/profile' || pathname === '/404') {
    return true;
  }
  return false;
};

const getFooterLink = (href, title) => (
  <li className={'footer__item'}>
    <a
      className={'footer__link'}
      href={href}>
      {title}
    </a>
  </li>
);

export const Footer = () => {
  const year = new Date().getFullYear();

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
            {getFooterLink('https://praktikum.yandex.ru/', 'Яндекс.Практикум')}
            {getFooterLink('https://github.com/cookiepatov/', 'GitHub')}
            {getFooterLink('https://www.facebook.com/Cookiepatov/', 'Facebook')}
          </ul>
        </div>
      </footer>
  );
};
