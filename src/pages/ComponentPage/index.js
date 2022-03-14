import React from 'react';
import style from './style.module.scss';
import * as Comp from "components";

export const ComponentPage = () => {
  return (
    <div className={style.ComponentPage}>
      <h2>ComponentPage</h2>
      {/* <h3>header</h3>
      <Comp.Header /> */}
      {/* <h3>Contribute</h3>
      <Comp.Contribute /> */}
      <h3>Message</h3>
      <Comp.Message>
        <div className={style.message}>
          <div className={style.text}>請先登入才能發文</div>
          <div className={style.choice}>
            <div className={style.exit}>離開</div>
            <div className={style.space} />
            <div className={style.login}>登入</div>
          </div>
        </div>
      </Comp.Message>
    </div>
  )
}
