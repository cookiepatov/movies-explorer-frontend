import React from 'react';

import { SectionHeading } from '../SectionHeading';

import photo from '../../../images/user-photo.jpg';

import './AboutMe.css';

const getSocialLinkItem = (href, title) => (
  <li className={'links__item'}>
    <a
      className={'link'}
      href={href}>
      {title}
    </a>
  </li>);

export const AboutMe = () => (
  <section id={'about_me'} className={'about-me'}>
    <SectionHeading
      title={'Студент'} />
    <div className={'info'}>
      <h3 className={'info__name'}>
        Евгений
      </h3>
      <p className={'info__tile'}>
        Фронтенд-разработчик, 29 лет
      </p>
      <p className={'info__text'}>
        Начинающий разработчик из Москвы.
        По образованию - инженер-физик, работал большую часть в сфере гос-закупок,
        но душа всегда стремилась прогать. Сейчас занимаюсь разработкой развивающих игр для детей
        на Реакте, в свобоное время играю на гитаре и укулеле
        или снимаю красивые штуки с квадрокоптера
      </p>
      <ul className={'info__links'}>
        {getSocialLinkItem('https://github.com/cookiepatov/', 'GitHub')}
        {getSocialLinkItem('https://www.facebook.com/Cookiepatov/', 'Facebook')}
        {getSocialLinkItem('https://www.linkedin.com/in/evgeny-reynat-612445210/', 'LinkedIn')}
        {getSocialLinkItem('https://www.instagram.com/cookiepatov/', 'Instagram')}
      </ul>
      <img className={'photo'} alt={'Фотография'} src={photo} />
    </div>
  </section>
);
