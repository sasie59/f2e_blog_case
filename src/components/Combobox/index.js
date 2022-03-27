import React, { useState } from 'react'
import style from './style.module.scss';
import icon from './Polygon.png';

export function Combobox(props) {
  const [isAppear, setIsAppear] = useState(false);
  const [item, setItem] = useState(props.list[0]);

  const handleClick = () => {
    setIsAppear(!isAppear);
  }
  const handleChange = (item) => {
    setItem(item);
  }
  return (
    <div className={`${style.Combobox} ${props.className}`} onClick={handleClick}>
      <div className={style.box}>
        <img src={icon} alt="" />
        <div className={style.choice}>
          {item}
        </div>
        {isAppear &&
          <div className={style.fakeSelect}>
            <img src={icon} alt="" />
            {props.list.map((item, index) =>
              <div
                onClick={handleChange.bind(this, item)}
                className={style.fakeLi}
                key={index}>
                {item}
              </div>
            )}
          </div>
        }
      </div>
    </div>
  )
}
