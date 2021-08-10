import React from 'react';
import ToggleableLink from '../../TogleableLink/TogglableLink';
import './NavTab.css';

export const NavTab = (props) => {
  const { disabled } = props;
  const getNavItem = (itemId, title, notWorking) => (
    <li>
      <ToggleableLink
        disabled={notWorking}
        samePage={true}
        className='navTab__link'
        to={`#${itemId}`}>
        {title}
      </ToggleableLink>
    </li>);
  return (
  <nav className={'navTab'}>
    <ul className={'navTab__container'}>
      {getNavItem('about_project', 'О проекте', disabled)}
      {getNavItem('techs', 'Технологии', disabled)}
      {getNavItem('about_me', 'Студент', disabled)}
    </ul>
  </nav>
  );
};
