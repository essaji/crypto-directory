import React from 'react';
import ExchangeDetailPage from '../pages/ExchangeDetailPage/ExchangeDetailPage';
import { Route, Routes } from 'react-router-dom';

export default function ExchangeRoute() {
  return (
    <Routes>
      <Route path=':exchangeId' element={<ExchangeDetailPage />} />
    </Routes>
  );
}
