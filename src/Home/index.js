import React from 'react';
import style from './style.module.scss';

export default function index() {
  return (
    <div className={style.layout}>
      <header>
        <div className={style.title}>Side Project</div>
        <div className={style.searchBar}>
          <input placeholder='搜尋視覺或專案...' type="text" />
          <div className={style.search}></div>
        </div>
        <div className={style.login}>
          <div className={style.contribute}></div>
          <div className={style.avatar}></div>
        </div>
      </header>
      <main></main>
      <footer>
        <div className={style.provenance}>Idea Share © Code: Samick & Michael   /  Design: KT</div>
      </footer>
    </div>
  )
}
