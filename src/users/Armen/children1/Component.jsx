import React from 'react';
import classNames from 'classnames';
import style from './Component.module.css';

export default function Component(props) {
  return (
    <div
      className={classNames(style.container, {
        [`${style.dark}`]: props.type === 'dark',
        [`${style.light}`]: props.type === 'light',
        [`${style.small}`]: props.size === 'small',
        [`${style.medium}`]: props.size === 'medium',
        [`${style.large}`]: props.size === 'large',
      })}
      style={{
        backgroundImage: `url(${props.withImage})`,
        backgroundSize: 'cover',
      }}
    >
      {props.title && (
        <>
          <h1>{props.title}</h1>
          <hr />
        </>
      )}
      {props.children}
    </div>
  );
}
