import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ExchangeRoute from './ExchangeRoute';
import HomeRoute from './HomeRoute';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/exchange/*' element={<ExchangeRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
