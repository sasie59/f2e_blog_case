import React, { useState } from 'react';
import style from './style.module.scss';
import * as Comp from '../../components';
import arrow from './arrow.png';
import prev from './prev.png';
import next from './next.png';
import head from '../../components/Card/head.png';
import head2 from '../../components/Card/head2.png';
import photo from '../../components/Card/photo.png';
import photo2 from '../../components/Card/photo2.png';
import pen from './Icon/pen.png';
const text = '開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程...';
const text2 = '想做一支整合股市、基金等資訊的網站，除了分析股市，也加入各家銀行手續…';
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
  const [isChange, setIsChange] = useState(true);

  const handleClick = () => {
    setIsChange(!isChange)
  }
  return (
    <div className={style.layout}>
      <Comp.Header />
      <div className={style.type}>
        <Comp.Switch
          design='設計分享'
          proposal='提案'
          onClick={handleClick}
        // isChange={isChange}
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
            <a href='#/project'>
              <Comp.Card
                head={isChange ? item.head : head2}
                photo={isChange ? item.photo : photo2}
                name={isChange ? 'Doris Wang' : 'Jenny Wilson'}
                title={isChange ? '我的輕旅行' : '股市分析'}
                innerText={isChange ? text : text2}
              />
            </a>
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
        <a href="#/contribute">
          <img src={pen} alt="" />
        </a>
      </div>
      <div className={style.footer} />
    </div>
  )
}
