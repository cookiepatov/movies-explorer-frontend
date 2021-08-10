import { React, useState, useEffect } from 'react';

import { AuthForm } from '../AuthForm';
import { LogoBtn } from '../LogoBtn/LogoBtn';

import './Register.css';

export const Register = (props) => {
  const { handleRegister, disabled } = props;
  const [inputsValidity, setValidity] = useState({ email: true, password: true });
  const [formValiduty, setFormValidity] = useState(false);
  const [inputValues, setInputValues] = useState({ name: '', password: '', email: '' });
  const [errorMsgs, setErrorMsgs] = useState({ name: '', password: '', email: '' });
  const handleChange = (e) => {
    const {
      name, validity, validationMessage, value,
    } = e.target;
    setValidity({ ...inputsValidity, [name]: validity.valid });
    setErrorMsgs({ ...errorMsgs, [name]: validationMessage });
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    const inputs = Object.keys(inputsValidity);
    const valid = inputs.every((field) => inputsValidity[field] === true);
    setFormValidity(valid && inputs.every((field) => inputValues[field] !== ''));
  }, [inputValues]);

  return (
    <main className={'register'}>
      <LogoBtn disabled={disabled} />
      <h2 className={'register__message'}>Добро пожаловать!</h2>
      <AuthForm
        disabled={disabled}
        isRegister={true}
        formValidity={formValiduty}
        inputsValidity={inputsValidity}
        errorMsgs={errorMsgs}
        onSubmit={(e) => handleRegister(e, inputValues)}
        onChange={handleChange}/>
    </main>
  );
};
