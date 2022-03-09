import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExchangeRoute from './ExchangeRoute';
import HomePage from '../pages/HomePage/HomePage';

function RooRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exchange/*' element={<ExchangeRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RooRoute;
