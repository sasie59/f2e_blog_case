import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Title from './Component/Title/';
import HomePage from './HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='Component/Title/' element={<Title />}></Route>
        <Route path='/' element={<HomePage />}></Route> */
      </Routes>
    </HashRouter>
  );
}

export default App;
