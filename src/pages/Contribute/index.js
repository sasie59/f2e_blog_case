import React from 'react'
import style from './style.module.scss';
import * as Comp from '../../components';

export function Contribute() {
  return (
    <div className={style.layout}>
      <Comp.Header />
      <div className={style.Contribute}>
        <div className={style.firstRow}>
          {/* <Comp.Combobox

          /> */}
          <div>
            <img src="" alt="" />
            <div></div>
          </div>
        </div>
        <div className={style.secRow}>
          {/* <Comp.Combobox

          /> */}
        </div>
        <div className={style.name}></div>
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
