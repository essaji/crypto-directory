import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import RooRoute from './routes/RooRoute';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RooRoute />
  </QueryClientProvider>,
  document.getElementById('root')
);
