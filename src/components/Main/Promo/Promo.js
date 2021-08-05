import React from 'react';

import logo from '../../../images/praktikum-logo.svg';

import './Promo.css';

export const Promo = () => (
    <>
    <div className={'promo-screen'}></div>
    <section className={'promo'}>
      <img
        className={'promo__logo'}
        src={logo}
        alt={'Практикум'}/>
      <h1
        className={'promo__heading'}>
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
    </section>
    </>
);
