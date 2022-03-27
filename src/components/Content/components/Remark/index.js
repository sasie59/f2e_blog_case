import React from 'react'
import style from './style.module.scss';
export function Remark(props) {
  return (
    <div className={style.remark}>
      <img src={props.CC} alt="" />
      <div className={style.text}>
        {props.text}
        <span>{props.insideText}</span>
        {props.text1}
      </div>
    </div>
  )
}
