import React from 'react';

import { InputElement } from '../InputElement';
import ToggleableLink from '../TogleableLink/TogglableLink';

import { namePattern } from '../../utils/constants/regExp';

import './AuthForm.css';

export const AuthForm = (props) => {
  const {
    isRegister, onChange, onSubmit, inputsValidity, errorMsgs, formValidity, disabled, authError,
  } = props;
  return (
    <form
      className={'auth-form'}
      onSubmit={onSubmit}>
      {isRegister && <InputElement
          pattern={namePattern}
          disabled={disabled}
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
          disabled={disabled}
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
          disabled={disabled}
          value={''}
          type={'password'}
          formType={'auth'}
          length={{ min: 8, max: 30 }}
          onChange={onChange}
          name={'password'}
          title={'Пароль'}
          validity={inputsValidity.password}
          placeholder={''}
          errorText={errorMsgs.password}
        />
        {!!authError.length && <span className={'auth-form__server-error'}>{authError}</span>}
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
          <ToggleableLink
            disabled={disabled}
            className={'auth-bottom__link'}
            to={isRegister ? '/signin' : '/signup'}>
              {isRegister ? 'Войти' : 'Зарегистрироваться'}
          </ToggleableLink>
        </div>
    </form>
  );
};
