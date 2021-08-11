import React from 'react';

import { SectionHeading } from '../SectionHeading';

import photo from '../../../images/user-photo.jpg';

import './AboutMe.css';
import ToggleableLink from '../../TogleableLink/TogglableLink';

export const AboutMe = ({ disabled }) => {
  const getSocialLinkItem = (href, title, notWorkinbg) => (
    <li className={'links__item'}>
      <ToggleableLink
        external={true}
        disabled={notWorkinbg}
        className={'link'}
        to={href}>
        {title}
      </ToggleableLink>
    </li>);
  return (
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
        {getSocialLinkItem('https://github.com/cookiepatov/', 'GitHub', disabled)}
        {getSocialLinkItem('https://www.facebook.com/Cookiepatov/', 'Facebook', disabled)}
        {getSocialLinkItem('https://www.linkedin.com/in/evgeny-reynat-612445210/', 'LinkedIn', disabled)}
        {getSocialLinkItem('https://www.instagram.com/cookiepatov/', 'Instagram', disabled)}
      </ul>
      <img className={'photo'} alt={'Фотография'} src={photo} />
    </div>
  </section>
  );
};
