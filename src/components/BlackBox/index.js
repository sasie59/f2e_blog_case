import React, { useState } from 'react';
import style from './style.module.scss';
import arrow from './arrow.png';
export function BlackBox(props) {
  const [item,] = useState(props.list[0]);
  const [isAppear, setIsAppear] = useState(false);

  const handleClick = () => {
    setIsAppear(!isAppear);
  }
  return (
    <div className={style.BlackBox} onClick={handleClick}>
      <div className={style.choice}>
        {item.text}
        <img src={arrow} alt="" />
      </div>
      <div className={style.box}>
        {isAppear && props.list.map(item =>
          <div
            className={style.selectOne}
            key={item}
            onClick={props.onChange.bind(this, item.key)}
          >
            {item.text}
          </div>
        )}
      </div>

    </div>
  )
}
