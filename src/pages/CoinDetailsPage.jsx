import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '../services/FetchCoinsDetails';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import { Code } from 'react-content-loader';

const CoinDetailsPage = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CurrencyContext);
  const { isError, isLoading, data: coin } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    console.log(coin);
  }, [coin]);
  if (isLoading) {
    return (
      <Code />
    )
  }
  if (isError) {
    return (
      <div className="text-white text-2xl flex justify-center items-center h-64">
        Error loading coin details
      </div>
    )
  }

  return (
    <div className='flex flex-col md:flex-row '>
      <div className="md:w-2/5 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500 p-2">
        <img
          src={coin?.image?.large}
          alt={coin?.name}
          className='mb-5 h-52' />
        <h1 className='text-4xl font-bold mb-5'>
          {coin?.name}
        </h1>
        <p className='text-justify '>
          {coin?.description?.en ? coin.description.en : "No description available."}
        </p>
        <div className='w-full flex flex-col mt-5 md:flex-row md:justify-around'>
          <div className='flex items-center mb-4 md:md-0'>
            <h2 className="text-xl font-bold">Rank</h2>
            <span className="ml-3 text-xl ">{coin?.market_cap_rank}</span>
          </div>
          <div className='flex items-center mb-4 md:md-0'>
            <h2 className="text-xl font-bold text-yellow-400">Current Price</h2>
            <span className="ml-3 text-xl ">{coin?.market_data?.current_price?.[currency] ? `${coin.market_data.current_price[currency].toLocaleString()}` : "Price not available"}</span>
          </div>
        </div>


      </div>
      <div className="md:w-2/3 w-full p-6">
        Coin Information
      </div>
    </div>
  )
}

export default CoinDetailsPage
