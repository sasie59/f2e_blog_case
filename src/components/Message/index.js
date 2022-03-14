import React from 'react'
import style from './style.module.scss';

export function Message(props) {
  return (
    <div className={style.Message}>
      {props.children}
    </div>
  )
}
