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
          <div className={style.space} />
          <button />
        </div>
        <div className={style.include}>
          <div className={style.proposal}>
            <div className={style.space1} />
            <div className={style.img} />
            <div className={style.space2} />
            <div className={style.text}>投稿/提案</div>
          </div>
        </div>
        <div className={style.space} />
        <div className={style.photo} />
        <div className={style.lastSpace} />
      </div>
    </div>
  )
}
