import React from 'react';
import './exchange-card.scss';
import { ExchangeInterface } from '../../services/services.types';
import { useNavigate } from 'react-router-dom';

export default function ExchangeCard(exchange: ExchangeInterface) {
  const navigate = useNavigate();
  return (
    <div
      className='exchange-card'
      onClick={() => navigate(`/exchange/${exchange.id}`)}
      data-testid='exchange-card'
    >
      <div className='exchange-card__logo'>
        <img src={exchange.image} alt='exchange-logo' />
      </div>
      <div className='exchange-card__detail'>
        <div className='exchange-card__name'>{exchange.name}</div>
        <div className='exchange-card__url'>{exchange.url}</div>
        <div className='exchange-card__country'>
          <strong>Country: </strong> {exchange.country}
        </div>
        <div className='exchange-card__trust'>
          <strong>Trust Score: </strong> {exchange.trust_score_rank}
        </div>
      </div>
    </div>
  );
}
