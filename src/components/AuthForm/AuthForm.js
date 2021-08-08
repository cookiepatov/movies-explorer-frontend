import React from 'react';

import { InputElement } from '../InputElement';

import './AuthForm.css';

export const AuthForm = (props) => {
  const {
    needName, handleChange, inputsValidity, errorMsgs, formValidity,
  } = props;
  return (
    <form className={'auth-form'}>
      {needName && <InputElement
          value={''}
          type={'text'}
          formType={'auth'}
          length={{ min: 3, max: 30 }}
          onChange={handleChange}
          name={'name'}
          title={'Имя'}
          validity={inputsValidity.name}
          placeholder={''}
          errorText={errorMsgs.name}
        />}
        <InputElement
          value={''}
          type={'email'}
          formType={'auth'}
          length={{ min: 3, max: 30 }}
          onChange={handleChange}
          name={'email'}
          title={'E-mail'}
          validity={inputsValidity.email}
          placeholder={''}
          errorText={errorMsgs.email}
        />
        <InputElement
          value={''}
          type={'password'}
          formType={'auth'}
          length={{ min: 3, max: 30 }}
          onChange={handleChange}
          name={'password'}
          title={'Пароль'}
          validity={inputsValidity.email}
          placeholder={''}
          errorText={errorMsgs.email}
        />
        <button type={'submit'} disabled={!formValidity}>
          {needName ? 'Зарегистрироваться' : 'Войти'}
        </button>
    </form>
  );
};
