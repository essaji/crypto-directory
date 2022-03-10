import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/basic.scss';
import RootRoute from './routes/RootRoute';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RootRoute />
  </QueryClientProvider>,
  document.getElementById('root')
);
