import React from 'react';
import './Shading.css';

export const Shading = (props) => (
    <div className={props.isShaded ? 'shading shading_visible' : 'shading'}>
    </div>
);
