import React from 'react';
import { ExchangeDetailInterface } from '../../services/services.types';
import { FaFacebook, FaReddit, FaSlack, FaTelegram } from 'react-icons/fa';
import './exchange-detail.scss';

export default function ExchangeDetail(
  exchangeDetail: ExchangeDetailInterface
) {
  return (
    <div className='exchange-detail' data-testid='exchange-detail'>
      <div className='exchange-detail__logo'>
        <img src={exchangeDetail.image} alt='exchange-logo' />
      </div>
      <div className='exchange-detail__container'>
        <div className='exchange-detail__name'>{exchangeDetail.name}</div>
        <div className='exchange-detail__country'>
          <strong>Country: </strong>
          {exchangeDetail.country}
        </div>
        <div className='exchange-detail__trust'>
          <strong>Trust Rank: </strong>
          {exchangeDetail.trust_score_rank}
        </div>
        <div className='exchange-detail__year'>
          <strong>Year of Establishment: </strong>
          {exchangeDetail.year_established}
        </div>
        <div className='exchange-detail__overview'>
          <strong>Description:</strong>{' '}
          {exchangeDetail.description || (
            <span className='exchange-detail__empty'>No description</span>
          )}
        </div>
        <div className='exchange-detail__social'>
          <strong>Social Links: </strong>
          {exchangeDetail.facebook_url && (
            <span
              className='exchange-detail__social-icon'
              onClick={() => window.open(exchangeDetail.facebook_url)}
            >
              <FaFacebook />
            </span>
          )}
          {exchangeDetail.slack_url && (
            <span
              className='exchange-detail__social-icon'
              onClick={() => window.open(exchangeDetail.slack_url)}
            >
              <FaSlack />
            </span>
          )}
          {exchangeDetail.reddit_url && (
            <span
              className='exchange-detail__social-icon'
              onClick={() => window.open(exchangeDetail.reddit_url)}
            >
              <FaReddit />
            </span>
          )}
          {exchangeDetail.telegram_url && (
            <span
              className='exchange-detail__social-icon'
              onClick={() => window.open(exchangeDetail.telegram_url)}
            >
              <FaTelegram />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
