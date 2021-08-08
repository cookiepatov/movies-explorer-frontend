import {
  React, useContext, useEffect, useState,
} from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { InputElement } from '../InputElement';

export const Profile = ({ handleChangeUser, handleLogout }) => {
  const user = useContext(CurrentUserContext);
  const [inputsValidity, setValidity] = useState({ name: true, email: true });
  const [formValiduty, setFormValidity] = useState(false);
  const [inputValues, setInputValues] = useState({ name: '', email: '' });
  const [errorMsgs, setErrorMsgs] = useState({ name: '', email: '' });
  const handleChange = (e) => {
    const {
      name, validity, validationMessage, value,
    } = e.target;
    setValidity({ ...inputsValidity, [name]: validity.valid });
    setErrorMsgs({ ...errorMsgs, [name]: validationMessage });
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    const inputs = Object.keys(user);
    const newInputValues = {};
    inputs.forEach((field) => {
      newInputValues[field] = user[field];
    });
    setInputValues(newInputValues);
  }, [user]);

  useEffect(() => {
    const inputs = Object.keys(inputsValidity);
    const isSame = inputs.every((field) => user[field] === inputValues[field]);
    const valid = inputs.every((field) => inputsValidity[field] === true);
    setFormValidity(valid && !isSame);
  }, [inputValues]);

  return (
    <main className={'profile'}>
      <h2 className={'profile__welcome'}>
        Привет, {user.name}!
      </h2>
      <form
        className={'profile__form'}
        onSubmit={(e) => handleChangeUser(e, inputValues)}>
        <InputElement
          value={user.name}
          type={'text'}
          formType={'profile'}
          length={{ min: 3, max: 30 }}
          onChange={handleChange}
          name={'name'}
          title={'Имя'}
          validity={inputsValidity.name}
          placeholder={''}
          errorText={errorMsgs.name}
        />
        <InputElement
          value={user.email}
          type={'email'}
          formType={'profile'}
          length={{ min: 3, max: 30 }}
          onChange={handleChange}
          name={'email'}
          title={'E-mail'}
          validity={inputsValidity.email}
          placeholder={''}
          errorText={errorMsgs.email}
        />
        <button
          disabled={!formValiduty}
          className={'profile__button'}
          type={'submit'}>
          Редактировать
        </button>
        <button
          className={'profile__button profile__button_logout'}
          type={'button'}
          onClick={() => handleLogout()}>
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
};
