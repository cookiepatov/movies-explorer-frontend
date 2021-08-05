import React from 'react';
import './Portfolio.css';

const getLinkObject = (href, title) => (
  <li className={'portfolio__item'}>
      <a href={href} className={'portfolio__link'}>
        {title}
        <span className={'arrow'}>↗</span>
      </a>
    </li>);

export const Portfolio = () => (
    <section className={'portfolio'}>
      <h2 className={'portfolio__heading'}>
        Портфолио
      </h2>
      <ul className={'portfolio__links'}>
        {getLinkObject('https://github.com/cookiepatov/how-to-learn', 'Статичный сайт')}
        {getLinkObject('https://github.com/cookiepatov/russian-travel', 'Адаптивный сайт')}
        {getLinkObject('https://github.com/cookiepatov/react-mesto-api-full', 'Одностраничное приложение')}
      </ul>
    </section>
);
