import React from 'react';
import style from './style.module.scss';
import * as Comp from "components";

export const ComponentPage = () => {
  return (
    <div className={style.ComponentPage}>
      <h2>ComponentPage</h2>
      <h3>header</h3>
      <Comp.Header />
      <h3>combobox</h3>
      <Comp.ComboboxName />
      <div style={{ height: '10px' }} />
      <Comp.ComboboxUi />
      {/* <h3>Contribute</h3>
      <Comp.Contribute /> */}
      {/* <h3>Switch</h3>
      <Comp.Switch>
        <div className={style.design}>設計分享</div>
        <div className={style.proposal}>提案</div>
      </Comp.Switch>
      <div style={{ height: '10px' }} />
      <Comp.Switch>
        <div className={style.change}>
          <div className={style.ngised}>設計分享</div>
          <div className={style.lasoporp}>提案</div>
        </div>
      </Comp.Switch> */}
      {/* <div>
        <h3>Message</h3>
        <div style={{ display: 'flex' }}>
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
          <Comp.Message>
            <div className={style.message}>
              <div className={style.text}>確定要刪除專案？</div>
              <div className={style.choice}>
                <div className={style.exit}>取消</div>
                <div className={style.space} />
                <div className={style.login}>確定</div>
              </div>
            </div>
          </Comp.Message>
          <Comp.Message>
            <div className={style.message}>
              <div className={style.text}>
                <div style={{ width: '162px' }} >
                  發文次數己超過限制
                </div>
              </div>
              <div className={style.choice}>
                <div className={style.exit}>取消</div>
                <div className={style.space} />
                <div className={style.login}>確定</div>
              </div>
            </div>
          </Comp.Message>
        </div>
        <div style={{ display: 'flex', margin: '10px' }}>
          <Comp.Message>
            <div className={style.bigMessage}>
              <div className={style.text}>
                <div style={{ width: '186px' }}>
                  Google雲端容量已滿，請清出空間後再發文。
                </div>
              </div>
              <div className={style.choice}>
                <div className={style.exit}>取消</div>
                <div className={style.space} />
                <div className={style.login}>確定</div>
              </div>
            </div>
          </Comp.Message>
          <Comp.Message>
            <div className={style.bigMessage}>
              <div className={style.text}>
                <div style={{ width: '144px' }}>
                  必填項目未填寫，請填寫後再發佈。
                </div>
              </div>
              <div className={style.sure}>確定</div>
            </div>
          </Comp.Message>
        </div >
      </div> */}
    </div >
  )
}
