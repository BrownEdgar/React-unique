import React, { useReducer } from 'react';
import classNames from 'classnames';
import style from './Component.module.css';
import image from './image/download.jpg';

const initialState = {
  buttonOneClicked: false,
  buttonTwoClicked: false,
  buttonThreeClicked: false,
  hideParagraphs: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'BUTTON_ONE_CLICK':
      return { ...initialState, buttonOneClicked: true };
    case 'BUTTON_TWO_CLICK':
      return { ...initialState, buttonTwoClicked: true, hideParagraphs: true };
    case 'BUTTON_THREE_CLICK':
      return { ...initialState, buttonThreeClicked: true };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default function Component(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonOneClick = () => {
    dispatch({ type: 'BUTTON_ONE_CLICK' });
  };

  const handleButtonTwoClick = () => {
    dispatch({ type: 'BUTTON_TWO_CLICK' });
  };

  const handleButtonThreeClick = () => {
    dispatch({ type: 'BUTTON_THREE_CLICK' });
  };

  const handleButtonFourClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const handleButtonResetClick = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div
      className={classNames(style.container, {
        [`${style.dark}`]: props.type === 'dark',
        [`${style.bisqueBackground}`]: state.buttonOneClicked,
        [`${style.blackColor}`]: state.buttonOneClicked,
        [`${style.scaled}`]: state.buttonTwoClicked,
        [`${style.backgroundImage}`]: state.buttonThreeClicked,
      })}
    >
      {props.title && (
        <>
          <h1>{props.title}</h1>
          <hr />
        </>
      )}
      {state.buttonThreeClicked ? (
        <div className={style.imageContainer} style={{ backgroundImage: `url(${image})` }}>
          {/* You can add any content inside the div */}
        </div>
      ) : (
        props.children && (
          <div className={classNames({ [`${style.hidden}`]: state.hideParagraphs })}>
            {props.children}
          </div>
        )
      )}
      <button
        className={classNames({ [`${style.buttonBorder}`]: state.buttonOneClicked })}
        onClick={handleButtonOneClick}
      >
        Button 1
      </button>
      <button
        className={classNames({ [`${style.buttonBorder}`]: state.buttonTwoClicked })}
        onClick={handleButtonTwoClick}
      >
        Button 2
      </button>
      <button
        className={classNames({ [`${style.buttonBorder}`]: state.buttonThreeClicked })}
        onClick={handleButtonThreeClick}
      >
        Button 3
      </button>
      <button onClick={handleButtonFourClick}>Button 4</button>
      <button onClick={handleButtonResetClick}>Button 5</button>
    </div>
  );
}
