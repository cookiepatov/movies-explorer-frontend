import React from 'react';
import './NavTab.css';

export const NavTab = () => (
    <nav className={'navTab'}>
      <ul className={'navTab__container'}>
        <li>
          <a className='navTab__link'
            href='#about_project'>
              О проекте
          </a>
        </li>
        <li>
          <a className='navTab__link'
            href='#techs'>
              Технологии
          </a>
        </li>
        <li>
          <a className='navTab__link'
            href='#about_me'>
              Студент
          </a>
        </li>
      </ul>
    </nav>
);
