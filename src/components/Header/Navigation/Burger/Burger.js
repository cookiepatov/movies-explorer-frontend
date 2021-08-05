import { React } from 'react';
import { classNames } from '../../../../utils';

import './Burger.css';

export const Burger = (props) => {
  const { onClick, isOpened } = props;
  return (
    <button className={'burger'} onClick={onClick}>
      <div className={classNames('burger__line', isOpened && 'burger__line_top-opened')}></div>
      <div className={classNames('burger__line', isOpened && 'burger__line_middle-opened')}></div>
      <div className={classNames('burger__line', isOpened && 'burger__line_bottom-opened')}></div>
    </button>
  );
};
