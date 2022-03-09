import axios from 'axios';
import { FetchExchangesParams } from './services.types';

const client = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  timeout: 5000,
});

export const fetchExchanges = (params: FetchExchangesParams) =>
  client.get(`/exchanges`, { params });
export const fetchExchange = (exchangeId: string) =>
  client.get(`/exchanges/${exchangeId}`);
