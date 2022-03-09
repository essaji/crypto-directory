import React from 'react';
import { useQuery } from 'react-query';
import { fetchExchanges } from '../../services/services';
import { ExchangeInterface } from '../../services/services.types';
import ExchangeCard from '../../components/ExchangeCard/ExchangeCard';
import './home-page.scss';

export default function HomePage() {
  const { isLoading, data: exchanges } = useQuery(
    'exchangeData',
    () => fetchExchanges({ per_page: 10 }),
    { staleTime: Infinity }
  );

  if (isLoading) return <div className='loader' />;
  return (
    <div className='home-page'>
      <div className='home-page__title'>Crypto Exchange Directory</div>
      <div className='home-page__exchanges'>
        {exchanges?.data.map((exchange: ExchangeInterface) => (
          <ExchangeCard {...exchange} key={exchange.id} />
        ))}
      </div>
    </div>
  );
}
