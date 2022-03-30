import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import * as Page from "pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/component' exact element={<Page.ComponentPage />}></Route>
        <Route path='/home' exact element={<Page.HomePage />}></Route>
        <Route path='/project' exact element={<Page.ProjectPage />}></Route>
        <Route path="/" exact element={<Page.HomePage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
