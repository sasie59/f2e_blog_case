import React, { useState } from 'react'
import style from './style.module.scss';
import * as Comp from '../../components';
import addImg from './addImg.png';
import prev from './prev.png'
export function Contribute() {
  const [value, setValue] = useState('');

  const handleSearch = (value) => {
    setValue(value);
  }
  return (
    <div className={style.layout}>
      <div className={style.Header}>
        <Comp.Header
          value={value}
          onSubmit={handleSearch}
        />
      </div>
      <div className={style.deviceHeader}>
        <a href="/">
          <img src={prev} alt="" />
        </a>
        <div className={style.space} />
        <div className={style.text}>
          投稿 / 提案
        </div>
        <div className={style.space} />
      </div>
      <div className={style.Contribute}>
        <div className={style.firstRow}>
          <div className={style.firstDescribe}>*必選</div>
          <Comp.Combobox className={style.myCombobox1} list={['請 選 擇', 'UI 投搞', '提     案']} />
          <div className={style.photo}>
            <img src={addImg} alt="" />
            <div className={style.addImg}>+ 新增圖片</div>
            <div className={style.imgDescribe}>視覺或示意圖<br />(建議
              <span style={{ color: '#00A3FF' }}>
                寬670 x 高502
              </span>
              JPG、PNG)
            </div>
          </div>
        </div>
        <div className={style.secRow}>
          <div className={style.secDescribe}>創用CC
            <span style={{ color: '#00A3FF' }}>
              (版權說明)
            </span>
            <span style={{ color: '#FF688C' }}>
              *必填
            </span>
          </div>
          <Comp.Combobox className={style.myCombobox2} list={['請 選 擇', '姓名標示', '姓名標示－非商業性']} />
        </div>
        <div className={style.name}>
          <div className={style.nameDescribe}>專案名稱
            <span style={{ color: '#FF688C' }}>
              *必填
            </span>
          </div>
          <input type="text" />
        </div>
        <div className={style.types}>
          <div className={style.typesDescribe}>專案分類</div>
          <div className={style.CheckBoxArr}>
            {['網頁', 'I O S', 'Android', '軟體', '元件', '其他介面'].map(item =>
              <div key={item} className={style.item}>
                <Comp.CheckBox />
                <div className={style.text}>
                  {item}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={style.fileLink}>
          <div>視覺稿</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div className={style.text}>附上視覺稿連結，方便工程師了解詳細視覺</div>
        </div>
        <div className={style.describe}>
          <div>專案說明</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div className={style.text}>詳細說明專案，讓工程師更了解專案內容。</div>
        </div>
        <div className={style.release}>
          <div className={style.space} />
          <div className={style.box}>
            <div className={style.cancel}>取消</div>
            <div className={style.submit}>發怖</div>
          </div>
        </div>
      </div>
    </div>
  )
}
