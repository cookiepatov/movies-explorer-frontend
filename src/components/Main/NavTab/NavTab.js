import React from 'react';
import './NavTab.css';

const getNavItem = (itemId, title) => (
  <li>
    <a className='navTab__link'
      href={`#${itemId}`}>
      {title}
    </a>
  </li>);

export const NavTab = () => (
  <nav className={'navTab'}>
    <ul className={'navTab__container'}>
      {getNavItem('about_project', 'О проекте')}
      {getNavItem('techs', 'Технологии')}
      {getNavItem('about_me', 'Студент')}
    </ul>
  </nav>
);
