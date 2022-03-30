import React from 'react'
import style from './style.module.scss';
import * as Comp from '../../components';
import head from './head.png';
import head1 from './head1.png';
import link from './link.png';
import bgc from './bgc.png';
import bgc1 from './bgc1.png';
import CC from '../../components/Content/CC.png';

export function ProjectPage() {
  return (
    <div className={style.layout}>
      <Comp.Header />
      {/* <div className={style.content}>
        <Comp.Content
          head={head}
          name='Doris Wang'
          time='2021/09/30'
          bgc={bgc}
          remark={{
            CC,
            text: '本著作係採用',
            text1: '授權.',
            insideText: '創用 CC 姓名標示 3.0 台灣 授權條款',
          }}
          edit='編    輯'
          del='刪    除'
          title={'我的輕旅行'}
          innerText={'開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程；上傳照片，記錄美好的回憶。'}
          link={'https://www.figma.com/file/cuQhxmhzBXMOGysKvrTHmO/Hermes?node-id=567%3A3885'}

          footer={{
            number: 236
          }}
          list={['網頁', 'Android']}
        />
      </div> */}
      <div className={style.content}>
        <Comp.Content
          head={head1}
          name='Jenny Wilson'
          time='2021/08/21'
          bgc={bgc1}
          remark={{
            CC,
            text: '本著作係採用',
            text1: '授權.',
            insideText: '創用 CC 姓名標示 3.0 台灣 授權條款',
          }}
          img={link}
          title='股市分析'
          innerText='想做一支整合股市、基金等資訊的網站，除了分析股市，也加入各家銀行手續費比價，買到最適合的，荼被二尊我交闕是模中呸利張意字人火無資嗜機交意脆人珠頭書的面因老我，有考少更，用到佰城期的爆他鋪華嗎多人要鴦完、的凰穆比瑟於該些圖的鳳也癌迄，菲找是以，四資達是解找的他黨…書不城卻督業比作棍資指讓尊中。'
          footer={{
            number: 130
          }}
          list={['網頁', 'IOS']}
        />
      </div>
    </div>
  )
}
