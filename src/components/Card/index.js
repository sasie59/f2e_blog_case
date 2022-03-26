import React from 'react'
import style from './style.module.scss';

export function Card(props) {
  return (
    <div className={style.Card}>
      <div className={style.content}>
        <div className={style.author}>
          <img src={props.head} alt="" />
          <div className={style.name}>{props.name}</div>
        </div>
        <div className={style.title}>{props.title}</div>
        <div className={style.innerText}>{props.innerText}</div>
      </div>
      <div className={style.img}>
        <img src={props.photo} alt="" />
      </div>
    </div>
  )
}
