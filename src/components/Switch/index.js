import React, { useState } from 'react'
import style from './style.module.scss';

export function Switch() {
  const [choice, setChoice] = useState(true);
  const handleClick = () => {
    setChoice(!choice);
  }
  return (
    <div className={style.Switch} onClick={handleClick}>
      <div className={choice ? style.design : style.ngised}>設計分享</div>
      <div className={choice ? style.proposal : style.lasoporp}>提案</div>
    </div>
  )
}
