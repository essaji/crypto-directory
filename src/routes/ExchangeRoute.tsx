import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ExchangeDetailPage from '../pages/ExchangeDetailPage/ExchangeDetailPage';

export default function ExchangeRoute() {
  return (
    <Routes>
      <Route path=':exchangeId' element={<ExchangeDetailPage />} />
    </Routes>
  );
}
