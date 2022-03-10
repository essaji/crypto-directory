import React from 'react';
import ExchangeCard from './ExchangeCard';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedExchange = {
  id: 'exchange-id-here',
  image: 'url-to-logo-image',
  url: 'url-to-official-website',
  name: 'Exchange name goes here',
  country: 'USA',
  trust_score_rank: 10,
};

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

const renderComponent = () =>
  render(
    <ExchangeCard
      year_established={0}
      description={''}
      has_trading_incentive={false}
      trust_score={0}
      trade_volume_24h_btc={0}
      trade_volume_24h_btc_normalized={0}
      {...mockedExchange}
    />
  );

describe('ExchangeCard component', () => {
  beforeAll(jest.clearAllMocks);

  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByTestId('exchange-logo')).toHaveAttribute('src', mockedExchange.image);
    expect(screen.getByText(mockedExchange.name)).toBeInTheDocument();
    expect(screen.getByText(mockedExchange.url)).toBeInTheDocument();
    expect(screen.getByText(mockedExchange.country)).toBeInTheDocument();
    expect(screen.getByText(mockedExchange.trust_score_rank)).toBeInTheDocument();
  });

  test('Should navigate to exchange detail page', () => {
    renderComponent();

    fireEvent.click(screen.getByText(mockedExchange.name));
    expect(mockedNavigate).toBeCalledWith(`/exchange/${mockedExchange.id}`);
  });
});
