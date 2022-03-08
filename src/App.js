import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Desktop from './Desktop/Home';
import Mobile from './Mobile/Home';
import Tablet from './Tablet/Home';
import HomePage from './HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='Desktop' element={<Desktop />}></Route>
        <Route path='Mobile' element={<Mobile />}></Route>
        <Route path='Tablet' element={<Tablet />}></Route>
        <Route path='/' element={<HomePage />}></Route> */
      </Routes>
    </HashRouter>
  );
}

export default App;
