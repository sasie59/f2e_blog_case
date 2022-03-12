import React from 'react';
import style from './style.module.scss';

export function Sure(props) {
  return (
    <div className={style.Sure}>
      <div className={style.Message}>
        {props.name}
        <div className={style.sure}>確定</div>
      </div>
    </div>
  )
}
