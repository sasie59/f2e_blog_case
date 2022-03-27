import React from 'react';
import style from './style.module.scss';

export function BlackBox(props) {
  return (
    <div className={style.BlackBox}>
      <div>
        {props.news}
      </div>
      <div>
        {props.popular}
      </div>
      <div className={style.logOut}>
        {props.logOut}
      </div>
    </div>
  )
}
