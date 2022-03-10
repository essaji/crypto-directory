import React from 'react';
import { render, screen } from '@testing-library/react';
import ExchangeDetail from './ExchangeDetail';

const mockedExchangeDetail = {
  id: 'exchange-id-here',
  image: 'exchange-id-here',
  name: 'Exchange name',
  country: 'USA',
  year_established: 2022,
  trust_score_rank: 10,
  description: 'exchange description goes here',
  facebook_url: 'facebook-url-goes-here',
};

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

const renderComponent = () =>
  render(
    <ExchangeDetail
      url={''}
      reddit_url={''}
      telegram_url={''}
      slack_url={''}
      other_url_1={''}
      other_url_2={''}
      twitter_handle={''}
      has_trading_incentive={false}
      centralized={false}
      public_notice={''}
      alert_notice={''}
      trust_score={0}
      trade_volume_24h_btc={0}
      trade_volume_24h_btc_normalized={0}
      tickers={[]}
      status_updates={[]}
      {...mockedExchangeDetail}
    />
  );

describe('ExchangeDetail component', () => {
  beforeAll(jest.clearAllMocks);

  test('Should render the component', () => {
    renderComponent();
    expect(screen.getByTestId('exchange-logo')).toHaveAttribute('src', mockedExchangeDetail.image);
    expect(screen.getByText(mockedExchangeDetail.name)).toBeInTheDocument();
    expect(screen.getByText(mockedExchangeDetail.country)).toBeInTheDocument();
    expect(screen.getByText(mockedExchangeDetail.trust_score_rank)).toBeInTheDocument();
    expect(screen.getByText(mockedExchangeDetail.description)).toBeInTheDocument();
  });

  test('Should show clickable facebook icon', () => {
    renderComponent();
    expect(screen.getByTestId('social-link')).toHaveAttribute('href', mockedExchangeDetail.facebook_url);
  });
});
