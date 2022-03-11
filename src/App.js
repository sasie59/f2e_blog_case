import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Title from './Component/Title/';
import Loading from './Loading';
import Contribute from './Contribute';
import HomePage from './HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='Component/Title/' element={<Title />}></Route>
        <Route path='Loading' element={<Loading />}></Route>
        <Route path='Contribute' element={<Contribute />}></Route>
        <Route path='/' element={<HomePage />}></Route> */
      </Routes>
    </HashRouter>
  );
}

export default App;
