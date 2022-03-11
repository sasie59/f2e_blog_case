import React from 'react';
import Title from '../Component/Title';
import loading from './loading.png';

import style from './style.module.scss';

export default function index() {
  return (
    <div className={style.layout}>
      <Title />
      <img className={style.loading} src={loading} alt="" />
    </div>
  )
}
