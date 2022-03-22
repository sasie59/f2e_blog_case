import React from 'react';
import style from './style.module.scss';
import * as Comp from "components";

export const ComponentPage = () => {
  return (
    <div className={style.ComponentPage}>
      <h2>ComponentPage</h2>
      <h3>header</h3>
      <Comp.Header />
      <h3>combobox</h3>
      <Comp.ComboboxName />
      <div style={{ height: '10px' }} />
      <Comp.ComboboxUi />
      <h3>Switch</h3>
      <Comp.Switch />
      <h3>Message</h3>
      <Comp.Message>
        <Comp.Popup
          cancelText='離開'
          confirmText='登入'
        >
          {/* 確定要刪除專案？ */}
          {/* 必填項目未填寫，<br />請填寫後再發佈。 */}
          Google雲端容量已滿， <br />請清出空間後再發文。
        </Comp.Popup>
      </Comp.Message>
    </div>
  )
}
