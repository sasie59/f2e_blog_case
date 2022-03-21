import React, { useState } from 'react'
import style from './style.module.scss';
import icon from './Polygon.png';

export function ComboboxName() {
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
            <div className={style.fakeLi}>姓名標示</div>
            <div className={style.space} />
            <div className={style.fakeLi}>姓名標示－非商業性</div>
          </div>
        }
      </div>
    </div>
  )
}
