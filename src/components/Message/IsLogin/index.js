import React from 'react';
import style from './style.module.scss';

export function IsLogin(props) {
  return (
    <div className={style.IsLogin}>
      <div className={style.Message}>
        {props.name}
        <div className={style.cancel}>離開</div>
        <div className={style.sure}>登入</div>
      </div>
    </div>
  )
}
