import React, { useState } from 'react'
import style from './style.module.scss';


export function CheckBox() {
  const [isCheck, setIsCheck] = useState(false);

  const handleChange = () => {
    setIsCheck(!isCheck)
  }
  return (
    <div onClick={handleChange} className={style.CheckBox}>
      {isCheck &&
        <div
          className={style.insideBox}
        />
      }
    </div>
  )
}
