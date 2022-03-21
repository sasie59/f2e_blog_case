import React, { useState } from 'react'
import style from './style.module.scss';
import icon from './Polygon.png';

export function ComboboxUi() {
  const [isAppear, setIsAppear] = useState(false);

  const handleClick = () => {
    setIsAppear(!isAppear);
  }
  return (
    <div className={style.Combobox} onClick={handleClick}>
      <div className={style.box}>
        <img src={icon} alt="" />
        <div className={style.choice}>
          請 選 擇
        </div>
        {isAppear &&
          <div className={style.fakeSelect}>
            <img src={icon} alt="" />
            <div className={style.fakeLi}>請 選 擇</div>
            <div className={style.space} />
            <div className={style.fakeLi}>UI 投搞</div>
            <div className={style.space} />
            <div className={style.fakeLi}>提     案</div>
          </div>
        }
      </div>
    </div>
  )
}
