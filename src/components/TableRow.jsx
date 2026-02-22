import React, {  useContext } from 'react'
import { IndianRupee, DollarSign } from "lucide-react";
import { CurrencyContext } from '../context/CurrencyContext';
import { useNavigate } from 'react-router-dom';

const TableRow = ({ data, isLoading }) => {
    // console.log(currency);
    const { currency } = useContext(CurrencyContext);
    const navigate = useNavigate();
    const handleCoinRedirect = (coinId) => {
        navigate(`/details/${coinId}`);
    };
    return (
        <>
            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div className="text-white text-2xl flex justify-center items-center h-64">
                    Loading...
                </div>}
                {data?.map((coin) => {
                    return (
                        <div
                            onClick={() => handleCoinRedirect(coin.id)}
                            key={coin.id}
                            className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center justify-start gap-3 basis-[35%]">
                                <div className="w-[4rem] h-[4rem]">
                                    <img
                                        src={coin.image}
                                        alt={coin.name}
                                        className="w-full h-full "
                                        loading='lazy'
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <div className="text-2xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>
                            </div>

                            <div className="flex basis-[25%]">

                                {currency === 'inr' ? coin.current_price.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                }) : coin.current_price.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                            </div>

                            <div className="flex basis-[20%]">
                                {coin.price_change_percentage_24h > 0 ? (
                                    <span className="text-green-500">
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                ) : (
                                    <span className="text-red-500">
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                )}
                            </div>

                            <div className="flex basis-[20%]">
                                {currency === 'inr' ? coin.market_cap.toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                }) : coin.market_cap.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default TableRow
