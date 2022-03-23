import React from 'react'
import style from './style.module.scss';
import photo from './photo.png';
import head from './head.png';

export function Card() {
  return (
    <div className={style.Card}>
      <div className={style.content}>
        <div className={style.author}>
          <img src={head} alt="" />
          <div className={style.name}>Doris Wang</div>
        </div>
        <div className={style.title}>我的輕旅行</div>
        <div className={style.innerText}>開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程...</div>
      </div>
      <div className={style.img}>
        <img src={photo} alt="" />
      </div>
    </div>
  )
}
