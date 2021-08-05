import React from 'react';
import { SectionHeading } from '../SectionHeading';
import './Techs.css';

const getTechs = (techNames) => techNames.map((item, index) => <li
  key={`tech-${index}`}
  className={'techs__item'}>
    {item}
  </li>);

export const Techs = () => (
    <section className={'techs'} id={'techs'}>
      <SectionHeading
        title={'Технологии'}
        darkline={true} />
      <h3 className={'techs__heading'}>
        7 технологий
      </h3>
      <p className={'techs__text'}>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className={'techs__container'}>
        {getTechs(['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDb'])}
      </ul>
    </section>
);
