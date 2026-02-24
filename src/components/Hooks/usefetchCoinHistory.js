import { useContext, useState } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { useQuery } from "@tanstack/react-query";
import fetchCoinHistoricData from "../../services/FetchCoinHistoricData";

function useFetchCoinHistory(coinId) {
    const { currency } = useContext(CurrencyContext);
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');

    const { data, isLoading, isError } = useQuery({
        queryKey: ["coinInfo", coinId, days, currency, interval],
        queryFn: () => fetchCoinHistoricData(coinId, interval, days, currency),
        gcTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });
    return [
        data,
        isLoading,
        isError,
        setCoinInterval,
        setDays,
        days,
        currency
    ];
}

export default useFetchCoinHistory