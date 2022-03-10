import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchExchange } from '../../services/services';
import ExchangeDetail from '../../components/ExchangeDetail/ExchangeDetail';
import './exhcnage-detail-page.scss';
import Loader from '../../components/Loader/Loader';
import { ExchangeDetailInterface } from '../../services/services.types';

export default function ExchangeDetailPage() {
  const { exchangeId } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: exchange,
  } = useQuery(`exchange_${exchangeId}`, () => fetchExchange(exchangeId!!), {
    staleTime: Infinity,
  });

  if (isLoading) return <Loader />;
  if (error) {
    console.error(error);
    return <div>Oops! Something went wrong.</div>;
  }

  return (
    <div className='exchange-detail-page'>
      <div className='exchange-detail-page__back'>
        <strong onClick={() => navigate('/')}>Back to Main</strong>
      </div>
      <ExchangeDetail {...(exchange as ExchangeDetailInterface)} />
    </div>
  );
}
