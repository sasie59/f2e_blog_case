import React from 'react'
import style from './style.module.scss';
import icon from './Polygon.png';
export function Combobox() {
  return (
    <div className={style.Combobox}>
      <div className={style.box}>
        <div className={style.firSelect}>
          請 選 擇
          <img src={icon} alt="" />
        </div>
        <div className={style.secSelect}>
          <img src={icon} alt="" />
          <div>請 選 擇</div>
          <div className={style.space} />
          <div>姓名標示</div>
          <div className={style.space} />
          <div>姓名標示－非商業性</div>
        </div>
        <div className={style.thirSelect}>
          <img src={icon} alt="" />
          <div>請 選 擇</div>
          <div className={style.space} />
          <div className={style.choice}>姓名標示</div>
          <div className={style.space} />
          <div>姓名標示－非商業性</div>
        </div>
      </div>
      {/* <select className={style.firSelect} name="" id="">
        <option value="">請 選 擇</option>
      </select> */}
      {/* <select className={style.secSelect} name="" id="">
        <option value="">請 選 擇</option>
        <option value="">姓名標示</option>
        <option value="">姓名標示－非商業性</option>
      </select>
      <select className={style.thirSelect} name="" id="">
        <option value="">請 選 擇</option>
        <option value="">姓名標示</option>
        <option value="">姓名標示－非商業性</option>
      </select> */}
    </div>
  )
}
