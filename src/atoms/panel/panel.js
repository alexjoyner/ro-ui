import React from 'react';
import './panel.sass';

export const Panel = (props) => {
  return (
      <div className={'panel'}>
          {props.children}
      </div>
  )
};