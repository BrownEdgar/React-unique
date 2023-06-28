/* eslint-disable react/prop-types */
import classNames from 'classnames';
import style from './Component.module.css';

export default function Component(props) {
  return (
    <div
      className={classNames(style.container, {
				[`${style[props.type]}`]: !!props.type,
				[`${style[props.size]}`]: !!props.size,
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
