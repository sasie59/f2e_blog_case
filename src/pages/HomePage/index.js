import React, { useState } from 'react';
import style from './style.module.scss';
import * as Comp from '../../components';
import prev from './prev.png';
import next from './next.png';
import head from '../../components/Card/head.png';
import head2 from '../../components/Card/head2.png';
import photo from '../../components/Card/photo.png';
import photo2 from '../../components/Card/photo2.png';
import pen from './Icon/pen.png';
const text = '開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程...';
const text2 = '想做一支整合股市、基金等資訊的網站，除了分析股市，也加入各家銀行手續…';
const text3 = '大景。筠不，有產！轉到問我？都個一渝鳳人齊市之吝伙的碩都蚊的版林表下陳...'
const imgArr = [
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'newest', name: "Doris Wang", },
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'popular', name: "Doris Wang", },
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'newest', name: "Doris Wang", },
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'newest', name: "Doris Wang", },
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'popular', name: "Doris Wang", },
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'popular', name: "Doris Wang", },
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'newest', name: "Doris Wang", },
  { head: head, photo: photo, type: 'design', title: '我的輕旅行', text: text, category: 'newest', name: "Doris Wang", },
  { head: head2, photo: photo2, type: 'proposal', title: '潤起有理人', text: text3, category: 'newest', name: "Jenny Wilson", },
  { head: head2, photo: photo2, type: 'proposal', title: '與怠電了氧賺', text: text3, category: 'popular', name: "Bessie Cooper", },
  { head: head2, photo: photo2, type: 'proposal', title: '研弟給要的年要觸完當', text: text3, category: 'newest', name: "Arlene McCoy", },
  { head: head2, photo: photo2, type: 'proposal', title: '潤起有理人', text: text3, category: 'popular', name: "Robert Fox", },
  { head: head2, photo: photo2, type: 'proposal', title: '股市分析', text: text2, category: 'newest', name: "高祐昀", },
  { head: head2, photo: photo2, type: 'proposal', title: '股市分析', text: text2, category: 'newest', name: "郭輝聖", },
  { head: head2, photo: photo2, type: 'proposal', title: '股市分析', text: text2, category: 'popular', name: "簡能銘", },
]
export function HomePage() {
  const [choice, setChoice] = useState("proposal");
  const [choose, setChoose] = useState('newest');
  const [value, setValue] = useState('');

  const handleChange = (value) => {
    setChoice(value);
  }
  const handleChange2 = (value) => {
    setChoose(value);
  }

  const handleSearch = (e) => {
    setValue(e.target.value);
    // e.preventDefault();
    // setValue('');
  }

  return (
    <div className={style.layout}>
      <Comp.Header
        value={value}
        onSubmit={handleSearch}
      />
      <div className={style.type}>
        <Comp.Switch
          design='設計分享'
          proposal='提案'
          tabList={[
            { key: 'design', text: '設計分享' },
            { key: 'proposal', text: '提案' },
          ]}
          choice={choice}
          onChange={handleChange}
        />
        <div className={style.space} />
        <div className={style.newest}>
          <Comp.BlackBox
            list={[
              { key: 'newest', text: '最 新' },
              { key: 'popular', text: '人氣瀏覽' }
            ]}
            choose={choose}
            onChange={handleChange2}
          />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.item}>
          {imgArr.filter(item =>
            item.type === choice
          ).filter(item =>
            item.category === choose
          ).filter(item =>
            item.name.toLowerCase().indexOf(value) > -1 ||
            item.text.toLowerCase().indexOf(value) > -1 ||
            item.title.toLowerCase().indexOf(value) > -1
          ).map(item =>
            <a href='#/project'>
              <Comp.Card
                head={item.head}
                photo={item.photo}
                name={item.name}
                title={item.title}
                innerText={item.text}
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
