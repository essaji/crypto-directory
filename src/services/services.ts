import axios from 'axios';
import { ExchangeDetailInterface, ExchangeInterface, FetchExchangesParams } from './services.types';

const client = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  timeout: 5000,
});

export const fetchExchanges = (params: FetchExchangesParams): Promise<ExchangeInterface[]> =>
  client.get(`/exchanges`, { params }).then((res) => res.data);

export const fetchExchange = (exchangeId: string): Promise<ExchangeDetailInterface> =>
  client.get(`/exchanges/${exchangeId}`).then((res) => res.data);
