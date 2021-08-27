import React from 'react';

import ToggleableLink from '../../TogleableLink/TogglableLink';

import { classNames } from '../../../utils';

import { beatsApiData } from '../../../utils/constants/apiData';

import heart from '../../../images/heart.svg';
import cross from '../../../images/cross.svg';

import './MoviesCard.css';

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
    trailer, trailerLink, image, nameRU, duration,
  } = movieData;
  const imageURL = image.url ? beatsApiData.baseUrl + image.url : image;
  return (
    <li className={'card'}>
      <ToggleableLink
        disabled={disabled}
        external={true}
        className={'card__link'}
        to={trailer || trailerLink}>
          <img className={'card__image'} src={imageURL} alt={nameRU} />
      </ToggleableLink>

      <div className={'card__middleRow'}>
        <h3 className={'card__title'}>
          {nameRU}
        </h3>
        <div>
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
      </div>
      <p className={'card__duration'}>
        {getTime(duration)}
      </p>
    </li>
  );
};
