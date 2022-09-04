import React from 'react';
import { BrowserRouter, Routes, Route, matchPath } from 'react-router-dom';

import { Header } from './components/header';
import { Home } from './views/home';

export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route 
          path='/'
          element={<Home/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

