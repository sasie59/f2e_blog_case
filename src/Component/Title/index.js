import React from 'react';
import style from './style.module.scss';
import pen from './pen.png';
export default function index() {
  return (
    <div className={style.layout}>
      <div className={style.projectName}>Side Project</div>
      <input type="text" placeholder='搜尋視覺或專案...' />
      <div className={style.search}>
        <div className={style.magnifier}>abc</div>
      </div>
      <div className={style.proposal}>
        {/* <div className={style.img}></div> */}
        <img src={pen} alt="" />
        <div className={style.text}>投稿/提案</div>
      </div>
      <div className={style.login}>登入</div>
    </div>
  )
}
