import React from 'react'
import style from './style.module.scss';
import * as Comp from './components';
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
          <div className={style.edit}>{props.edit}</div>
          <img src={props.img} alt="" />
          <div className={style.del}>{props.del}</div>
        </div>
      </div>
      <img className={style.img} src={props.bgc} alt="" />
      <div className={style.innerText}>
        <Comp.Remark {...props.remark} />
        <div className={style.title}>{props.title}</div>
        <div className={style.innerText}>{props.innerText}</div>
        <a href={props.link}>{props.link}</a>
        <div className={style.outTag}>
          {props.list.map((item, index) =>
            <div key={index} className={style.tag} >
              <div>
                {item}
              </div>
            </div>
          )}
        </div>
        <div className={style.line} />
        <Comp.Footer {...props.footer} />
      </div>
    </div>
  )
}
