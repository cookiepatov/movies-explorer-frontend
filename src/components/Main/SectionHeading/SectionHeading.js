import React from 'react';

import { classNames } from '../../../utils';

import './SectionHeading.css';

export const SectionHeading = (props) => {
  const { title, darkline = false } = props;
  return (
    <h2 className={classNames('heading', darkline && 'heading_darkline')}>
      {title}
    </h2>
  );
};
