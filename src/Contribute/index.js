import React from 'react';
import Title from '../Component/Title';
import style from './style.module.scss';

export default function index() {
  return (
    <div>
      <Title />
      <div className={style.form}>
        <div onLoadStart={style.mustOne}>
          <div className={style.text}>*必選</div>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div>
          <div>+ 新增圖片</div>
          <div>視覺或示意圖
            (建議 寬670 x 高502 JPG、PNG)</div>
        </div>
        <div onLoadStart={style.mustTwo}>
          <div className={style.text}>創用CC </div>
          <div className={style.text}>(版權說明)</div>
          <div className={style.text}>*必填</div>
          <input type="text" />
        </div>
        <div onLoadStart={style.mustThree}>
          <div className={style.text}>專案名稱</div>
          <div className={style.text}>*必填</div>
          <input type="text" />
        </div>
        <div>
          <div>專案分類</div>
          <input type='checkbox' />網頁
          <input type='checkbox' />IOS
          <input type='checkbox' />Android
          <input type='checkbox' />軟體
          <input type='checkbox' />元件
          <input type='checkbox' />其他介面
          <div>視覺稿</div>
          <input type="text" />
          <div>附上視覺稿連結，方便工程師了解詳細視覺</div>
        </div>
        <div>
          <div>專案說明</div>
          <input type="text" />
          <div>詳細說明專案，讓工程師更了解專案內容。</div>
        </div>
        <div>
          <button>取      消</button>
          <button>發      佈</button>
        </div>
      </div>
    </div>
  )
}
