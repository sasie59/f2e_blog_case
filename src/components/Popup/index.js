import React from 'react'
import style from './style.module.scss';

export function Popup(props) {
  return (
    <div className={style.Popup} >
      <div className={style.message}>
        {props.children}
      </div>
      <div className={style.choice}>
        {props.cancelText &&
          <div className={style.cancel}>
            {props.cancelText}
          </div>
        }
        <div className={style.sure}>
          {props.confirmText}
        </div>
      </div>
    </div>
  )
}
