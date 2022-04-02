import React from 'react'
import style from './style.module.scss';
import * as Comp from '../../components';
import addImg from './addImg.png';
export function Contribute() {
  return (
    <div className={style.layout}>
      <Comp.Header />
      <div className={style.Contribute}>
        <div className={style.firstRow}>
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
        <div className={style.types}></div>
        <div className={style.fileLink}></div>
        <div className={style.describe}></div>
        <div className={style.release}>
          <div className={style.cancel}>取消</div>
          <div className={style.submit}>發怖</div>
        </div>
      </div>
    </div>
  )
}
