import React from 'react';
import { FaFacebook, FaReddit, FaSlack, FaTelegram, FaTwitter } from 'react-icons/fa';

import { ExchangeDetailInterface } from '../../services/services.types';
import './exchange-detail.scss';

export default function ExchangeDetail(exchangeDetail: ExchangeDetailInterface) {
  const TWITTER_HOST = 'https://twitter.com';
  const socialLinks = [];
  exchangeDetail.facebook_url && socialLinks.push({ link: exchangeDetail.facebook_url, icon: <FaFacebook /> });
  exchangeDetail.telegram_url && socialLinks.push({ link: exchangeDetail.telegram_url, icon: <FaTelegram /> });
  exchangeDetail.reddit_url && socialLinks.push({ link: exchangeDetail.reddit_url, icon: <FaReddit /> });
  exchangeDetail.slack_url && socialLinks.push({ link: exchangeDetail.slack_url, icon: <FaSlack /> });
  exchangeDetail.twitter_handle &&
    socialLinks.push({
      link: `${TWITTER_HOST}/${exchangeDetail.twitter_handle}`,
      icon: <FaTwitter />,
    });

  return (
    <div className='exchange-detail' data-testid='exchange-detail'>
      <div className='exchange-detail__logo'>
        <img data-testid='exchange-logo' src={exchangeDetail.image} alt='exchange-logo' />
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
          <strong>Description: </strong>
          {exchangeDetail.description || <span className='exchange-detail__empty'>No description</span>}
        </div>
        <div className='exchange-detail__social'>
          <strong>Social Links: </strong>
          {socialLinks.length ? (
            socialLinks.map((s) => (
              <a
                href={s.link}
                className='exchange-detail__social-icon'
                key={s.link}
                target='_blank'
                rel='noreferrer'
                data-testid='social-link'
              >
                {s.icon}
              </a>
            ))
          ) : (
            <div className='exchange-detail__empty'>No social links</div>
          )}
        </div>
      </div>
    </div>
  );
}
