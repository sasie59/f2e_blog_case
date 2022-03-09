import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import HomePage from './HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='Home' element={<Home />}></Route>
        <Route path='/' element={<HomePage />}></Route> */
      </Routes>
    </HashRouter>
  );
}

export default App;
