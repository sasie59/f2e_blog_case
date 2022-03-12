import React from 'react';
import style from './style.module.scss';

export function Contribute() {
  return (
    <div>
      <div className={style.form}>
        <div className={style.mustOne}>
          <div className={style.text}>*必選</div>
          <select name="" id="">
            <option className={style.text} value="">請&nbsp;選&nbsp;擇</option>
            <option value=""></option>
          </select>
        </div>
        <div className={style.photo}>
          <div className={style.text1}>+ 新增圖片</div>
          <div className={style.text2}>視覺或示意圖</div>
          <div className={style.text3}>(建議 寬670 x 高502 JPG、PNG)</div>
        </div>
        <div className={style.mustTwo}>
          <div className={style.text1}>創用CC&nbsp;&nbsp;</div>
          <div className={style.text2}>(版權說明)&nbsp;</div>
          <div className={style.text3}>*必填</div>
          <select name="" id="">
            <option value="">請&nbsp;選&nbsp;擇</option>
            <option value=""></option>
          </select>
        </div>
        <div className={style.mustThree}>
          <span className={style.text1}>專案名稱&nbsp;</span>
          <span className={style.text2}>*必填</span><br />
          <input type="text" />
        </div>
        <div className={style.choice}>
          <div className={style.title}>專案分類
          </div>
          <div className={style.checkBox}>
            <input type='checkbox' />
            <div className={style.text}>網頁</div>
            <input type='checkbox' />
            <div className={style.text}>IOS</div>
            <input type='checkbox' />
            <div className={style.text}>Android</div>
            <input type='checkbox' />
            <div className={style.text}>軟體</div>
            <input type='checkbox' />
            <div className={style.text}>元件</div>
            <input type='checkbox' />
            <div className={style.text}>其他介面</div>
          </div>
        </div>
        <div className={style.visualDraft}>
          <div className={style.text1}>視覺稿</div>
          <input type="text" />
          <div className={style.text2}>附上視覺稿連結，方便工程師了解詳細視覺</div>
        </div>
        <div className={style.illustrate}>
          <div className={style.text1}>專案說明</div>
          <input type="text" />
          <div className={style.text2}>詳細說明專案，讓工程師更了解專案內容。</div>
        </div>
        <div className={style.button}>
          <button className={style.cancel}>取&nbsp;&nbsp;&nbsp;消</button>
          <button className={style.send}>發&nbsp;&nbsp;&nbsp;佈</button>
        </div>
      </div>
    </div>
  )
}
