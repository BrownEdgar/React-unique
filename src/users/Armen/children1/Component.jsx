<<<<<<< HEAD
import React from 'react';
=======
/* eslint-disable react/prop-types */
>>>>>>> c0a0655ed01900827b1211d588542fab08145df3
import classNames from 'classnames';
import style from './Component.module.css';

export default function Component(props) {
  return (
    <div
      className={classNames(style.container, {
<<<<<<< HEAD
        [`${style.dark}`]: props.type === 'dark',
        [`${style.light}`]: props.type === 'light',
        [`${style.small}`]: props.size === 'small',
        [`${style.medium}`]: props.size === 'medium',
        [`${style.large}`]: props.size === 'large',
=======
				[`${style[props.type]}`]: !!props.type,
				[`${style[props.size]}`]: !!props.size,
>>>>>>> c0a0655ed01900827b1211d588542fab08145df3
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
