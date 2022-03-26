import React from 'react'
import style from './style.module.scss';

export function Content(props) {
  return (
    <div className={style.Content}>
      <div className={style.title}>
        <div className={style.author}>
          <img src={props.head} alt="" />
          <div className={style.info}>
            <div className={style.name}>{props.name}</div>
            <div className={style.time}>{props.time}</div>
          </div>
        </div>
        <div className={style.space} />
        <div className={style.fix}>
          <div className={style.edit}>編    輯</div>
          <div className={style.space} />
          <div className={style.del}>刪    除</div>
        </div>
      </div>
      <img className={style.img} src={props.bgc} alt="" />
      <div className={style.innerText}>
        <div className={style.remark}>
          <img src={props.CC} alt="" />
          <div className={style.text}>
            {props.text}
            <span>
              {props.insideText}
            </span>
            {props.text1}
          </div>
        </div>
        <div className={style.title}>{props.title}</div>
        <div className={style.innerText}>{props.innerText}</div>
        <a href={props.link}>{props.link}</a>
        <div className={style.platform}>
          <div className={style.html}>{props.html}</div>
          <div className={style.Android}>{props.platform}</div>
        </div>
        <div className={style.line} />
        <div className={style.footer}>
          <div className={style.eye} />
          <div className={style.number}>{props.number}</div>
          <div className={style.saw}>人看過</div>
        </div>
      </div>
    </div>
  )
}
