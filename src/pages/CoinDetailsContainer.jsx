import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../context/CurrencyContext";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../services/FetchCoinsDetails";
import CoinDetailsPage from "./CoinDetailsPage";


function CoinDetailsContainer() {
    const { coinId } = useParams();
    const { currency } = useContext(CurrencyContext);
    const { isError, isLoading, data: coin } = useQuery({
        queryKey: ["coin", coinId],
        queryFn: () => fetchCoinDetails(coinId),
        gcTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });
    return (
        < CoinDetailsPage
            coin={coin}
            coinId={coinId}
            currency={currency}
            isError={isError}
            isLoading={isLoading}

        />
    )
}

export default CoinDetailsContainer

