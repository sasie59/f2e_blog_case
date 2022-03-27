import React from 'react';
import style from './style.module.scss';
import * as Comp from "components";

import head from '../../components/Card/head.png';
import photo from '../../components/Card/photo.png';
import bgc from '../../components/Content/photo.png';
import CC from '../../components/Content/CC.png';

export const ComponentPage = () => {
  return (
    <div className={style.ComponentPage}>
      <h2>ComponentPage</h2>
      <h3>header</h3>
      <Comp.Header />
      <h3>combobox</h3>
      <Comp.Combobox className={style.myCombobox} list={['請 選 擇', '姓名標示', '姓名標示－非商業性']} />
      <Comp.Combobox className={style.myCombobox2} list={['請 選 擇', 'UI 投搞', '提     案']} />
      <h3>Switch</h3>
      <Comp.Switch
        design='設計分享'
        proposal='提案'
      />
      <h3>CheckBox</h3>
      <Comp.CheckBox />
      <h3>BlackBox</h3>
      <Comp.BlackBox
        news='最    新'
        popular='人氣瀏覽'
      />
      <div style={{ height: '10px' }} />
      <Comp.BlackBox
        logOut='登  出'
      />
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
      <h3>Card</h3>
      <Comp.Card
        head={head}
        photo={photo}
        name={'Doris Wang'}
        title={'我的輕旅行'}
        innerText={'開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程...'}
      />
      <h3>Content</h3>
      <Comp.Content
        head={head}
        name={'Doris Wang'}
        time={'2021/09/30'}
        bgc={bgc}
        remark={{
          CC,
          text: '本著作係採用',
          text1: '授權.',
          insideText: '創用 CC 姓名標示 3.0 台灣 授權條款',
        }}

        title={'我的輕旅行'}
        innerText={'開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程；上傳照片，記錄美好的回憶。'}
        link={'https://www.figma.com/file/cuQhxmhzBXMOGysKvrTHmO/Hermes?node-id=567%3A3885'}

        footer={{
          number: 236
        }}
        list={['網頁', 'Android']}
      />
    </div>
  )
}
