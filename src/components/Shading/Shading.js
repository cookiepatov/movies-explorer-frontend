import React from 'react';
import { classNames } from '../../utils';
import './Shading.css';

export const Shading = (props) => {
  const {
    onClick, isShaded, higherThanHeader = false, disabled,
  } = props;
  return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={classNames('shading', isShaded && 'shading_visible', higherThanHeader && 'shading_top')}>
    </button>
  );
};
