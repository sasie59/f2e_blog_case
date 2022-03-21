import React from 'react'
import style from './style.module.scss';
import icon from './Polygon.png';
export function Combobox() {
  return (
    <div className={style.Combobox}>
      <div className={style.box}>
        <div className={style.fakeSelect}>
          <img src={icon} alt="" />
          <div className={style.fakeLi}>請 選 擇</div>
          <div className={style.space} />
          <div className={style.fakeLi}>姓名標示</div>
          <div className={style.space} />
          <div className={style.fakeLi}>姓名標示－非商業性</div>
        </div>
      </div>
    </div>
  )
}
