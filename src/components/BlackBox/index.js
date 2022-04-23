import React, { useState } from 'react';
import style from './style.module.scss';
import arrow from './arrow.png';
export function BlackBox(props) {
  const [item, setItem] = useState(props.list[0]);
  const [isAppear, setIsAppear] = useState(false);

  const handleClick = () => {
    setIsAppear(!isAppear);
  }

  const handleChange = (item) => {
    props.onChange(item.key);
    setItem(item);
  }

  return (
    <div className={style.BlackBox} onClick={handleClick}>
      <div className={style.choice}>
        {item.text}
        <img src={arrow} alt="" />
      </div>
      <div className={style.box}>
        {isAppear && props.list.map((item, index) =>
          <div
            className={style.selectOne}
            key={index}
            onClick={handleChange.bind(this, item)}
          >
            {item.text}
          </div>
        )}
      </div>
    </div>
  )
}
