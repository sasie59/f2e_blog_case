import React from 'react'
import style from './style.module.scss';

export function Footer(props) {
  return (
    <div className={style.footer}>
      <div className={style.eye} />
      <div className={style.number}>{props.number}</div>
      <div className={style.saw}>人看過</div>
    </div>
  )
}
