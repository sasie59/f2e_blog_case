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
  { name: "aaa", head: head, photo: photo, type: 'proposal' },
  { name: "bbb", head: head, photo: photo, type: 'design' },
  { name: "ccc", head: head, photo: photo, type: 'proposal' },
  { name: "ddd", head: head, photo: photo, type: 'design' },
  { name: "eee", head: head, photo: photo, type: 'proposal' },
  { name: "fff", head: head, photo: photo, type: 'design' },
  { name: "ggg", head: head, photo: photo, type: 'proposal' },
  { name: "hhh", head: head, photo: photo, type: 'design' },
  { name: "iii", head: head, photo: photo, type: 'proposal' },
  { name: "jjj", head: head, photo: photo, type: 'design' },
  { name: "kkk", head: head, photo: photo, type: 'proposal' },
  { name: "lll", head: head, photo: photo, type: 'aaa' },
  { name: "mmm", head: head, photo: photo, type: 'bbb' },
  { name: "nnn", head: head, photo: photo, type: 'aaa' },
  { name: "ooo", head: head, photo: photo, type: 'bbb' },
]
export function HomePage() {
  const [isChange, setIsChange] = useState(true);
  const [isAppear, setIsAppear] = useState(false);
  const [choice, setChoice] = useState("proposal");

  const handleClick = () => {
    setIsAppear(!isAppear);
  }

  const handleChange = (value) => {
    setChoice(value);
  }

  return (
    <div className={style.layout}>
      <Comp.Header />
      <div className={style.type}>
        <Comp.Switch
          design='設計分享'
          proposal='提案'
          tabList={[
            { key: 'design', text: '設計分享' },
            { key: 'proposal', text: '提案' },
            { key: 'aaa', text: 'AAA' },
            { key: 'bbb', text: 'BBB' },
          ]}
          choice={choice}
          onChange={handleChange}
        // isChange={isChange}
        />
        <div className={style.space} />
        <div className={style.newest}>
          {/* <div style={{ width: '65px', textAlignLast: 'justify' }}>
            {isAppear ? '人氣瀏覽' : '最 新'}</div> */}
          <Comp.BlackBox
            list={['最         新', '人氣瀏覽']}
          />
          {/* <img
            src={arrow}
            alt=""
            onClick={handleClick}
          /> */}
        </div>
      </div>
      <div className={style.content}>
        <div className={style.item}>
          {imgArr.filter(item =>
            item.type === choice
          ).map(item =>
            <a href='#/project'>
              <Comp.Card
                head={isChange ? item.head : head2}
                photo={isChange ? item.photo : photo2}
                name={item.name}
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
