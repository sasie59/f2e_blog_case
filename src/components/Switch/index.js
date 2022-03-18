import React from 'react'
import style from './style.module.scss';

export function Switch(props) {
  return (
    <div className={style.Switch}>
      {props.children}
    </div>
  )
}
