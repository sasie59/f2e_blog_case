import React from 'react'
import style from './style.module.scss';
import photo from './photo.png';
import head from './head.png';
import cc from './CC.png';

export function Content() {
  return (
    <div className={style.Content}>
      <div className={style.title}>
        <div className={style.author}>
          <img src={head} alt="" />
          <div className={style.info}>
            <div className={style.name}>Doris Wang</div>
            <div className={style.time}>2021/09/30</div>
          </div>
        </div>
        <div className={style.space} />
        <div className={style.fix}>
          <div className={style.edit}>編    輯</div>
          <div className={style.space} />
          <div className={style.del}>刪    除</div>
        </div>
      </div>
      <div className={style.img} />
      <div className={style.innerText}>
        <div className={style.remark}>
          <img src={cc} alt="" />
          <div className={style.text}>本著作係採用
            <span>
              創用 CC 姓名標示 3.0 台灣 授權條款
            </span>
            授權.
          </div>
        </div>
        <div className={style.title}>我的輕旅行</div>
        <div className={style.innerText}>開啟定位，搜尋附近藝文活動與台灣景點，簡單快速的規劃功能，輕鬆安排旅程；上傳照片，記錄美好的回憶。</div>
        <a href="">https://www.figma.com/file/cuQhxmhzBXMOGysKvrTHmO/Hermes?node-id=567%3A3885</a>
        <div className={style.platform}>
          <div className={style.html}>網頁</div>
          <div className={style.Android}>Android</div>
        </div>
        <div className={style.line} />
        <div className={style.footer}>
          <div className={style.eye}>
            <div>
              <div />
            </div>
          </div>
          <div className={style.number}>236</div>
          <div className={style.saw}>人看過</div>
        </div>
      </div>
    </div>
  )
}
