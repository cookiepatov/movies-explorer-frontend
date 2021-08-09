import React from 'react';
import { Link } from 'react-router-dom';

import { InputElement } from '../InputElement';

import './AuthForm.css';

export const AuthForm = (props) => {
  const {
    isRegister, onChange, onSubmit, inputsValidity, errorMsgs, formValidity,
  } = props;
  return (
    <form
      className={'auth-form'}
      onSubmit={onSubmit}>
      {isRegister && <InputElement
          value={''}
          type={'text'}
          formType={'auth'}
          length={{ min: 3, max: 30 }}
          onChange={onChange}
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
          length={{ min: 5, max: 30 }}
          onChange={onChange}
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
          length={{ min: 7, max: 30 }}
          onChange={onChange}
          name={'password'}
          title={'Пароль'}
          validity={inputsValidity.password}
          placeholder={''}
          errorText={errorMsgs.password}
        />
        <button
          type={'submit'}
          disabled={!formValidity}
          className={'auth-form__submit'}>
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>
        <div className={'auth-bottom'}>
          <span className={'auth-bottom__message'}>
            {isRegister ? 'Уже зарегистрированы? ' : 'Ещё не зарегистрированы? '}
          </span>
          <Link
            className={'auth-bottom__link'}
            to={isRegister ? '/signin' : '/signup'}>
              {isRegister ? 'Войти' : 'Зарегистрироваться'}
          </Link>
        </div>
    </form>
  );
};
