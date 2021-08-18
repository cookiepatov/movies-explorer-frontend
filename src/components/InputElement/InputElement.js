import React from 'react';
import { classNames } from '../../utils';

import './InputElement.css';

export const InputElement = (props) => {
  const {
    formType,
    type,
    length,
    onChange,
    name,
    title,
    validity,
    placeholder,
    value,
    errorText,
    disabled,
    pattern,
  } = props;

  return (
        <div className={classNames('input-container', `input-container_${formType}`, !validity && 'input-container_invalid')}>
            <label htmlFor={`${name}-input`} className={`input-title input-title_${formType}`}>{title}</label>
            <input
                pattern={pattern}
                disabled={disabled}
                id={`${name}-input`}
                type={type}
                name={name}
                required minLength={length.min}
                maxLength={length.max}
                className={classNames('input', `input_${formType}`, !validity && 'input_invalid')}
                placeholder={placeholder || `Введите ${title}`}
                defaultValue={value}
                onChange={onChange} />
            <span className={classNames('error', `error_${formType}`, !validity && 'error_visible')}>
                {errorText}
            </span>
        </div>
  );
};
