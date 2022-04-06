import React, { useState } from 'react'
import style from './style.module.scss';

export function Switch(props) {
  const [choice, setChoice] = useState('proposal');

  const handleClick = (name) => {
    setChoice(name);
    // console.warn(name);
  }

  return (
    <div className={style.Switch}>
      <div
        name='design'
        onClick={handleClick.bind(this, 'design')}
        className={choice === 'design' ? style.design : style.ngised}
      >
        {props.design}
      </div>
      <div
        onClick={handleClick.bind(this, 'proposal')}
        name='proposal'
        className={choice === 'proposal' ? style.lasoporp : style.proposal}
      >
        {props.proposal}
      </div>
    </div>
  )
}
