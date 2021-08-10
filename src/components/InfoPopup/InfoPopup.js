import React from 'react';

import cross from '../../images/cross.svg';
import { classNames } from '../../utils';

import './InfoPopup.css';

export const InfoPopup = (props) => {
  const {
    isVisible, message, onClose, disabled,
  } = props;
  return (<div className={classNames('popup', isVisible && 'popup_visible')}>
  <button
    disabled={disabled}
    className={'popup__button'}
    onClick={onClose}>
     <img className={'popup__button-image'} src={cross}/>
    </button>
  <p className={'popup__message'}>{message}</p>
</div>);
};
