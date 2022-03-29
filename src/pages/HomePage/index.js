import React from 'react';
import style from './style.module.scss';
import * as Comp from '../../components';
import arrow from './arrow.png';
import prev from './prev.png';
import next from './next.png';
import head from '../../components/Card/head.png';
import photo from '../../components/Card/photo.png';
import pen from './Icon/pen.png';
const text = '開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程...'
const imgArr = [
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
  { head: head, photo: photo },
]
export function HomePage() {
  return (
    <div className={style.layout}>
      <Comp.Header />
      <div className={style.type}>
        <Comp.Switch
          design='設計分享'
          proposal='提案'
        />
        <div className={style.space} />
        <div className={style.newest}>
          <div style={{ width: '61px', textAlignLast: 'justify' }}>最新</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.item}>
          {imgArr.map(item =>
            <Comp.Card
              head={item.head}
              photo={item.photo}
              name={'Doris Wang'}
              title={'我的輕旅行'}
              innerText={text}
            />
          )}
        </div>
      </div>
      <div className={style.page}>
        <div className={style.space} />
        <img src={prev} alt="" />
        <div className={style.number}>1</div>
        <img src={next} alt="" />
      </div>
      <div className={style.imgWrite}>
        <img src={pen} alt="" />
      </div>
      <div className={style.footer} />
    </div>
  )
}
