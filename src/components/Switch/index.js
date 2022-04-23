import React from 'react'
import style from './style.module.scss';

export function Switch(props) {
  return (
    <div className={style.Switch}>
      {props.tabList.map((item, index) =>
        <div
          key={index}
          onClick={props.onChange.bind(this, item.key)}
          className={props.choice === item.key ? style.active : ''}
        >
          {item.text}
        </div>
      )}
    </div>
  )
}
