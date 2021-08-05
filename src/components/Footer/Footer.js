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
          <li className={'footer__item'}>
            <a
              className={'footer__link'}
              href={'https://praktikum.yandex.ru/'}>
              Яндекс.Практикум
            </a>
          </li>
          <li className={'footer__item'}>
            <a
              className={'footer__link'}
              href={'https://github.com/cookiepatov/'}>
              GitHub
            </a>
          </li>
          <li className={'footer__item'}>
            <a
              className={'footer__link'}
              href={'https://www.facebook.com/Cookiepatov/'}>
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
