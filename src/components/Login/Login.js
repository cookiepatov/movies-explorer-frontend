import { React, useState, useEffect } from 'react';

import { AuthForm } from '../AuthForm';
import { LogoBtn } from '../LogoBtn/LogoBtn';

import './Login.css';

export const Login = (props) => {
  const { handleLogin } = props;
  const [inputsValidity, setValidity] = useState({ email: true, password: true });
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
    const inputs = Object.keys(inputsValidity);
    const valid = inputs.every((field) => inputsValidity[field] === true);
    setFormValidity(valid);
  }, [inputValues]);
  return (
    <main className={'login'}>
      <LogoBtn />
      <h2 className={'login__message'}>Рады видеть!</h2>
      <AuthForm
        needName={false}
        formValiduty={formValiduty}
        inputsValidity={inputsValidity}
        errorMsgs={errorMsgs}
        onSubmit={handleLogin}
        onChange={handleChange}/>
    </main>
  );
};
