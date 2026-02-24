import React, { useContext } from 'react'
import { IndianRupee, DollarSign } from "lucide-react";
import { CurrencyContext } from '../../context/CurrencyContext';
import { useNavigate } from 'react-router-dom';
import { formatCurrency, formatPercentage } from '../../helpers/formatter';
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
                {isLoading && <div className="text-white text-2xl flex justify-center items-start h-64">
                    Loading...
                </div>}
                {data?.map((coin) => {
                    return (
                        <div
                            onClick={() => handleCoinRedirect(coin.id)}
                            key={coin.id}
                            className="w-full bg-transparent text-white grid py-4 px-2 font-semibold items-center justify-between cursor-pointer"
                            style={{gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr"}}
                        >
                            <div className="flex items-start justify-start gap-3 min-w-0">
                                <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                                    <img
                                        src={coin.image}
                                        alt={coin.name}
                                        className="w-full h-full "
                                        loading='lazy'
                                    />
                                </div>

                                <div className="flex flex-col w-55">
                                    <div className="text-2xl truncate">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>
                            </div>

                            <div className="flex min-w-0">
                                {currency === 'inr' ? formatCurrency(coin.current_price, "INR") : formatCurrency(coin.current_price, "USD")}
                            </div>

                            <div className="flex min-w-0">
                                <span className={coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
                                    {formatPercentage(coin.price_change_percentage_24h)}
                                </span>
                            </div>

                            <div className="flex min-w-0 md:truncate">
                                {currency === 'inr' ? formatCurrency(coin.market_cap, "INR") : formatCurrency(coin.market_cap, "USD")}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default TableRow
