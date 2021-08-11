import React from 'react';
import ToggleableLink from '../../TogleableLink/TogglableLink';
import './Portfolio.css';

export const Portfolio = ({ disabled }) => {
  const getLinkObject = (href, title, notWorking) => (
    <li className={'portfolio__item'}>
      <ToggleableLink
        to={href}
        disabled={notWorking}
        className={'portfolio__link'}
        external={true}>
        {title}
        <span className={'arrow'}>↗</span>
      </ToggleableLink>
    </li>);
  return (<section className={'portfolio'}>
    <h2 className={'portfolio__heading'}>
      Портфолио
    </h2>
    <ul className={'portfolio__links'}>
      {getLinkObject('https://github.com/cookiepatov/how-to-learn', 'Статичный сайт', disabled)}
      {getLinkObject('https://github.com/cookiepatov/russian-travel', 'Адаптивный сайт', disabled)}
      {getLinkObject('https://github.com/cookiepatov/react-mesto-api-full', 'Одностраничное приложение', disabled)}
      {getLinkObject('https://github.com/cookiepatov/balloons-game', 'Приложение игра')}
      {getLinkObject('https://github.com/cookiepatov/aviasales-tickets', 'Менеджер авиабилетов', disabled)}
      {getLinkObject('https://github.com/cookiepatov/photo-gallery', 'Адаптивная фотогалерея', disabled)}
      {getLinkObject('https://github.com/cookiepatov/currency-converter', 'Конвертер валют', disabled)}
    </ul>
  </section>
  );
};
