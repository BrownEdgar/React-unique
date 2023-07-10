import React from 'react'


export default function Text({text}) {
  return (
    <div className='text'>
        <h1>{text.header}</h1>
      <div className='head'>
        <h2>{text.head}</h2>
        <br />
        <p className='time'>{text.time}</p>
        <br />
        <p className='text__foot'>{text.text}</p>
        <br />
        <br />
      </div>
      <span className='line'>{text.line}</span>
      <br />
      <br />
      <div className='icons'>
        <span>{text.facebook}</span>
        <span>{text.instagram}</span>
        <span>{text.twitter}</span>
        <span>{text.linkedin}</span>
      </div>
    </div>
  )
}
