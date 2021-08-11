import React from 'react';

import { classNames } from '../../../utils';

import heart from '../../../images/heart.svg';
import cross from '../../../images/cross.svg';

import './MoviesCard.css';
import ToggleableLink from '../../TogleableLink/TogglableLink';

const getTime = (duration) => {
  const minutes = duration % 60;
  const hours = (duration - minutes) / 60;
  const hoursString = hours ? `${hours}ч ` : '';
  const minutesString = minutes ? `${minutes}м` : '';
  return hoursString + minutesString;
};

export const MoviesCard = (props) => {
  const {
    movieData, isFromSaved, isLiked, onButtonClick, disabled,
  } = props;
  const {
    trailer, image, nameRU, duration,
  } = movieData;
  return (
    <li className={'card'}>
      <ToggleableLink
        disabled={disabled}
        external={true}
        className={'card__link'}
        to={trailer}>
          <img className={'card__image'} src={image} alt={nameRU} />
      </ToggleableLink>

      <div className={'card__middleRow'}>
        <h3 className={'card__title'}>
          {nameRU}
        </h3>
        <button
          disabled={disabled}
          className={classNames('card__button', isFromSaved && 'card__button_invisible')}
          onClick={() => onButtonClick(isLiked, movieData)}>
          <img
            className={classNames(
              'card__button-image',
              !isFromSaved && 'card__button-image_type_heart',
              isLiked && 'card__button-image_liked',
            )}
            src={isFromSaved ? cross : heart} />
        </button>
      </div>
      <p className={'card__duration'}>
        {getTime(duration)}
      </p>
    </li>
  );
};
