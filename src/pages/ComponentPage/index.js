import React from 'react';
import * as Comp from "components";

export const ComponentPage = () => {
  return (
    <div>
      <h2>ComponentPage</h2>
      <h3>header</h3>
      <Comp.Header />
      {/* <h3>Contribute</h3>
      <Comp.Contribute /> */}
      {/* <h3>Message</h3>
      <Comp.IsLogin name="請先登入才能發文" /><br />
      <Comp.IsSure name="確定要刪除專案 ?" /><br />
      <Comp.IsSure name="Google雲端容量已滿，請清出空間後再發文。" /><br />
      <Comp.IsSure name="發文次數已超過限制" /><br />
      <Comp.Sure name="必填項目未填寫，請填寫後再發佈。" /> */}
    </div>
  )
}
