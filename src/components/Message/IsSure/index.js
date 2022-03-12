import React from 'react';
import style from './style.module.scss';

export function IsSure(props) {
  return (
    <div className={style.IsSure}>
      <div className={style.Message}>
        {props.name}
        <div className={style.cancel}>取消</div>
        <div className={style.sure}>確定</div>
      </div>
    </div>
  )
}
