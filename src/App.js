import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Title from './Component/Title/';
import Loading from './Loading';
import Contribute from './Component/Contribute';
import Edit from './Edit';
import HomePage from './HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='Component/Title/' element={<Title />}></Route>
        <Route path='Loading' element={<Loading />}></Route>
        <Route path='Component/Contribute' element={<Contribute />}></Route>
        <Route path='Edit' element={<Edit />}></Route>
        <Route path='/' element={<HomePage />}></Route> */
      </Routes>
    </HashRouter>
  );
}

export default App;
