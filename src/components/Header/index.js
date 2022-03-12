import React from 'react';
import style from './style.module.scss';
import pen from './pen.png';

export function Header() {
  return (
    <div className={style.Header}>
      <div className={style.logoWrapper}>
        <div className={style.logo} />
      </div>
      <div className={style.menu}>
        <div className={style.searchBar}>
          <input placeholder='搜尋視覺或專案...' type="text" />
          <button />
        </div>
        <div className={style.proposal}>
          <div className={style.img} />
          <img src={pen} alt="" />
          <div className={style.text}>投稿/提案</div>
        </div>
        <div className={style.photo} />
      </div>
    </div>
  )
}
